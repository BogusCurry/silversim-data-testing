// SilverSim is distributed under the terms of the
// GNU Affero General Public License v3 with
// the following clarification and special exception.

// Linking this library statically or dynamically with other modules is
// making a combined work based on this library. Thus, the terms and
// conditions of the GNU Affero General Public License cover the whole
// combination.

// As a special exception, the copyright holders of this library give you
// permission to link this library with independent modules to produce an
// executable, regardless of the license terms of these independent
// modules, and to copy and distribute the resulting executable under
// terms of your choice, provided that you also meet, for each linked
// independent module, the terms and conditions of the license of that
// module. An independent module is a module which is not derived from
// or based on this library. If you modify this library, you may extend
// this exception to your version of the library, but you are not
// obligated to do so. If you do not wish to do so, delete this
// exception statement from your version.

/******************************************************************************/
function switchToAgentRegionsList(transitionDirection, fromview)
{
	require(["dojo/_base/array", "dojo/request", "dijit/registry", "dojox/mobile/TransitionEvent"], 
		function(array, request, registry, TransitionEvent)
	{
		list = registry.byId("list_agent_regions");
		list.destroyDescendants();
		request("/admin/json", 
		{
			method:"POST",
			data: JSON.stringify(
			{ 
				"method":"regions.list",
				"sessionid":sessionid
			}),
			headers:
			{
				"Content-Type":"application/json"
			},
			handleAs:"json"
		}).then(
			function(data) 
			{
				if(!data.success)
				{
					if(data.reason == 1)
					{
						new TransitionEvent(fromview, {
							moveTo: "viewlogin",
							transition: "slide",
							transitionDir: -1
						}).dispatch();
					}
					else
					{
						showErrorDialog(data.reason);
					}
					return;
				}
				
				array.forEach(data.regions, function(region)
				{
					var childWidget = new dojox.mobile.ListItem({
						clickable:region.IsOnline,
						label:region.Name});
					list.addChild(childWidget);
					if(!region.IsOnline)
					{
						childWidget.set('rightText','Offline');
					}
					childWidget.on("click", function() { switchToAgentList(region.ID, region.Name); });
				});
				
				new TransitionEvent(fromview, {
					moveTo: "viewagent_regionslist",
					transition: "slide",
					transitionDir: transitionDirection
				}).dispatch();
			},
			function(err) {
				showErrorTextDialog(err.toString());
			}
		);
	});
}

var selectedAgentListRegionID;
var selectedAgentListRegionName;

/******************************************************************************/
function initAgentDetails()
{
	require(["dijit/registry", "dojo/_base/array"], function(registry, array)
	{
		var view = registry.byId("regionagentdetails");
		view.destroyDescendants();
		
		var childWidget;
		
		view.addChild(new dojox.mobile.RoundRectCategory({label:'Details'}));
		
		childWidget = new dojox.mobile.RoundRectList();
		view.addChild(childWidget);
		
		childWidget.addChild(new dojox.mobile.ListItem({id:'agentdetails_id',label:'ID'}));
		childWidget.addChild(new dojox.mobile.ListItem({id:'agentdetails_fullname',label:'Full Name'}));
		childWidget.addChild(new dojox.mobile.ListItem({id:'agentdetails_firstname',label:'First Name'}));
		childWidget.addChild(new dojox.mobile.ListItem({id:'agentdetails_lastname',label:'Last Name'}));
		childWidget.addChild(new dojox.mobile.ListItem({id:'agentdetails_homeuri',label:'Home URI'}));
		
		if(containsAdminAll || 
			array.indexOf(rights, 'region.agents.kick')>=0 ||
			array.indexOf(rights, 'region.agents.teleporthome')>=0 ||
			array.indexOf(rights, 'region.agents.notice')>=0)
		{
			view.addChild(new dojox.mobile.RoundRectCategory({label:'Actions'}));
			
			childWidget = new dojox.mobile.RoundRectList();
			view.addChild(childWidget);
			
			if(containsAdminAll || array.indexOf(rights, 'region.agents.teleporthome')>=0)
			{
				var listItem = new dojox.mobile.ListItem({label:'Teleport Home',clickable:true});
				childWidget.addChild(listItem);
				listItem.on('click', function() { dijit.registry.byId('confirmagentteleporthomedialog').show(); });
			}
			if(containsAdminAll || array.indexOf(rights, 'region.agents.kick')>=0)
			{
				var listItem = new dojox.mobile.ListItem({label:'Kick',clickable:true});
				childWidget.addChild(listItem);
				listItem.on('click', function() { dijit.registry.byId('confirmagentkickdialog').show(); });
			}
			if(containsAdminAll || array.indexOf(rights, 'region.agents.notice')>=0)
			{
				var listItem = new dojox.mobile.ListItem({label:'Send Notice',clickable:true,arrowIcon:'mblDomButtonGrayKnob'});
				childWidget.addChild(listItem);
				listItem.on('click', function() { dijit.registry.byId('agentnoticedialog').show(); });
			}
		}
	});
}

/******************************************************************************/
function switchToAgentList(regionid, regionname)
{
	selectedAgentListRegionID = regionid;
	selectedAgentListRegionName = regionname;
	require(["dijit/registry"], function(registry)
	{
		registry.byId('agentlist_header').set('label', "Agents on Region " + regionname);
	});
	switchToActualAgentList(1, viewagent_regionslist);
}

/******************************************************************************/
function switchToActualAgentList(transitionDirection, fromview)
{
	require(["dojo/_base/array", "dojo/request", "dijit/registry", "dojox/mobile/TransitionEvent"], 
		function(array, request, registry, TransitionEvent)
	{
		list = registry.byId("list_agents_in_region");
		list.destroyDescendants();
		request("/admin/json", 
		{
			method:"POST",
			data: JSON.stringify(
			{ 
				"method":"region.agents.list",
				"root_only":true,
				"no_npc":true,
				"id":selectedAgentListRegionID,
				"sessionid":sessionid
			}),
			headers:
			{
				"Content-Type":"application/json"
			},
			handleAs:"json"
		}).then(
			function(data) 
			{
				if(!data.success)
				{
					if(data.reason == 1)
					{
						new TransitionEvent(fromview, {
							moveTo: "viewlogin",
							transition: "slide",
							transitionDir: -1
						}).dispatch();
					}
					else
					{
						showErrorDialog(data.reason);
					}
					return;
				}
				
				array.forEach(data.agents, function(agent)
				{
					var childWidget = new dojox.mobile.ListItem({
						clickable:true,
						label:agent.FullName});
					list.addChild(childWidget);
					childWidget.on("click", function() { switchToAgentDetails(agent.ID);});
				});
				
				new TransitionEvent(fromview, {
					moveTo: "viewagentlist",
					transition: "slide",
					transitionDir: transitionDirection
				}).dispatch();
			},
			function(err) {
				showErrorTextDialog(err.toString());
			}
		);
	});
}

/******************************************************************************/
var selectedAgentInRegionID;

function switchToAgentDetails(agentID)
{
	selectedAgentInRegionID = agentID;
	require(["dojo/_base/array", "dojo/request", "dijit/registry", "dojox/mobile/TransitionEvent"], 
		function(array, request, registry, TransitionEvent)
	{
		request("/admin/json", 
		{
			method:"POST",
			data: JSON.stringify(
			{ 
				"method":"region.agent.get",
				"id":selectedAgentListRegionID,
				"agentid":selectedAgentInRegionID,
				"sessionid":sessionid
			}),
			headers:
			{
				"Content-Type":"application/json"
			},
			handleAs:"json"
		}).then(
			function(data) 
			{
				if(!data.success)
				{
					if(data.reason == 1)
					{
						new TransitionEvent(viewagentlist, {
							moveTo: "viewlogin",
							transition: "slide",
							transitionDir: -1
						}).dispatch();
					}
					else
					{
						showErrorDialog(data.reason);
					}
					return;
				}
				
				registry.byId('agentdetails_header').set('label', "Agent " + data.agent.FullName + " on " + selectedAgentListRegionName);
				registry.byId('agentdetails_id').set('rightText', data.agent.ID);
				registry.byId('agentdetails_fullname').set('rightText', data.agent.FullName);
				registry.byId('agentdetails_firstname').set('rightText', data.agent.FirstName);
				registry.byId('agentdetails_lastname').set('rightText', data.agent.LastName);
				registry.byId('agentdetails_homeuri').set('rightText', data.agent.HomeURI);
				
				new TransitionEvent(viewagentlist, {
					moveTo: "viewagent",
					transition: "slide",
					transitionDir: 1
				}).dispatch();
			},
			function(err) {
				showErrorTextDialog(err.toString());
			}
		);
	});
}

/******************************************************************************/
function regionAgentTeleportHome()
{
	require(["dojo/_base/array", "dojo/request", "dijit/registry", "dojox/mobile/TransitionEvent"], 
		function(array, request, registry, TransitionEvent)
	{
		registry.byId('confirmagentteleporthomedialog').hide();
		request("/admin/json", 
		{
			method:"POST",
			data: JSON.stringify(
			{ 
				"method":"region.agent.teleporthome",
				"id":selectedAgentListRegionID,
				"agentid":selectedAgentInRegionID,
				"sessionid":sessionid
			}),
			headers:
			{
				"Content-Type":"application/json"
			},
			handleAs:"json"
		}).then(
			function(data) 
			{
				if(!data.success)
				{
					if(data.reason == 1)
					{
						new TransitionEvent(fromview, {
							moveTo: "viewlogin",
							transition: "slide",
							transitionDir: -1
						}).dispatch();
					}
					else
					{
						showErrorDialog(data.reason);
					}
					return;
				}
				
				switchToActualAgentList(-1, viewagent);
			},
			function(err) {
				showErrorTextDialog(err.toString());
			}
		);
	});
}

/******************************************************************************/
function regionAgentKick()
{
	require(["dojo/_base/array", "dojo/request", "dijit/registry", "dojox/mobile/TransitionEvent"], 
		function(array, request, registry, TransitionEvent)
	{
		registry.byId('confirmagentkickdialog').hide();
		request("/admin/json", 
		{
			method:"POST",
			data: JSON.stringify(
			{ 
				"method":"region.agent.kick",
				"id":selectedAgentListRegionID,
				"agentid":selectedAgentInRegionID,
				"sessionid":sessionid
			}),
			headers:
			{
				"Content-Type":"application/json"
			},
			handleAs:"json"
		}).then(
			function(data) 
			{
				if(!data.success)
				{
					if(data.reason == 1)
					{
						new TransitionEvent(fromview, {
							moveTo: "viewlogin",
							transition: "slide",
							transitionDir: -1
						}).dispatch();
					}
					else
					{
						showErrorDialog(data.reason);
					}
					return;
				}
				
				switchToActualAgentList(-1, viewagent);
			},
			function(err) {
				showErrorTextDialog(err.toString());
			}
		);
	});
}

/******************************************************************************/
function regionAgentNotice()
{
	require(["dojo/_base/array", "dojo/request", "dijit/registry", "dojox/mobile/TransitionEvent"], 
		function(array, request, registry, TransitionEvent)
	{
		registry.byId('agentnoticedialog').hide();
		request("/admin/json", 
		{
			method:"POST",
			data: JSON.stringify(
			{ 
				"method":"region.agent.notice",
				"id":selectedAgentListRegionID,
				"agentid":selectedAgentInRegionID,
				"message":registry.byId('agent_notice_text').get('value'),
				"sessionid":sessionid
			}),
			headers:
			{
				"Content-Type":"application/json"
			},
			handleAs:"json"
		}).then(
			function(data) 
			{
				if(!data.success)
				{
					if(data.reason == 1)
					{
						new TransitionEvent(fromview, {
							moveTo: "viewlogin",
							transition: "slide",
							transitionDir: -1
						}).dispatch();
					}
					else
					{
						showErrorDialog(data.reason);
					}
					return;
				}
			},
			function(err) {
				showErrorTextDialog(err.toString());
			}
		);
	});
}
