//	HYPE.documents["index"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "index_Resources";
	var documentName = "index";
	var documentLoaderFilename = "index_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",aS:"i",d:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:3.0999999,i:"a",e:26,r:1,s:-424,o:"10"},{f:"2",t:0,d:3.0999999,i:"a",e:7,r:1,s:-443,o:"6"},{f:"2",t:0,d:3.0999999,i:"b",e:28,r:1,s:28,o:"10"},{f:"2",t:0,d:3.0999999,i:"b",e:25,r:1,s:25,o:"6"},{f:"2",t:0,d:5.0666666,i:"b",e:28,r:1,s:28,o:"12"},{f:"2",t:0,d:6.0999999,i:"b",e:28,r:1,s:28,o:"13"},{f:"2",t:1,d:3.0999999,i:"b",e:32,r:1,s:32,o:"11"},{f:"2",t:1,d:3.0999999,i:"a",e:113,r:1,s:-336,o:"11"},{f:"2",t:1,d:3.0999999,i:"b",e:25,r:1,s:25,o:"4"},{f:"2",t:1,d:3.0999999,i:"a",e:88,r:1,s:-361,o:"4"},{f:"2",t:1.9666667,d:3.0999999,i:"b",e:25,r:1,s:25,o:"7"},{f:"2",t:1.9666667,d:3.0999999,i:"a",e:172,r:1,s:-273,o:"7"},{f:"2",t:1.9666667,d:3.0999999,i:"a",e:188,r:1,s:-257,o:"12"},{f:"2",t:3,d:3.0999999,i:"a",e:279,r:1,s:-167,o:"13"},{f:"2",t:3,d:3.0999999,i:"b",e:25,r:1,s:25,o:"8"},{f:"2",t:3,d:3.0999999,i:"a",e:255,r:1,s:-191,o:"8"},{f:"2",t:4.0666666,d:3.0999999,i:"b",e:28,r:1,s:28,o:"14"},{f:"2",t:4.0666666,d:3.0999999,i:"a",e:354,r:1,s:-85,o:"14"},{f:"2",t:4.0666666,d:3.0999999,i:"b",e:25,r:1,s:25,o:"9"},{f:"2",t:4.0666666,d:3.0999999,i:"a",e:330,r:1,s:-109,o:"9"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:7.1666665}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"13":{aV:8,w:"L",x:"visible",a:-167,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"9",k:"div",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",aT:8,j:"absolute",t:64,b:28,aU:8,G:"#FFFFFF"},"7":{c:100,d:100,I:"None",J:"None",K:"None",g:"#FD9352",L:"None",M:0,N:0,aI:50,A:"#A0A0A0",x:"visible",O:0,B:"#A0A0A0",k:"div",aJ:50,C:"#A0A0A0",z:"6",P:0,D:"#A0A0A0",aK:50,j:"absolute",aL:50,a:-273,b:25},"8":{c:100,d:100,I:"None",J:"None",K:"None",g:"#FD9352",L:"None",M:0,N:0,aI:50,A:"#A0A0A0",x:"visible",O:0,B:"#A0A0A0",k:"div",aJ:50,C:"#A0A0A0",z:"8",P:0,D:"#A0A0A0",aK:50,j:"absolute",aL:50,a:-191,b:25},"4":{c:100,d:100,I:"None",J:"None",K:"None",g:"#FD9352",L:"None",M:0,N:0,aI:50,A:"#A0A0A0",x:"visible",O:0,B:"#A0A0A0",k:"div",aJ:50,C:"#A0A0A0",z:"4",P:0,D:"#A0A0A0",aK:50,j:"absolute",aL:50,a:-361,b:25},"11":{aV:8,w:"T",x:"visible",a:-336,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"5",k:"div",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",aT:8,j:"absolute",t:64,b:32,aU:8,G:"#FFFFFF"},"9":{c:100,d:100,I:"None",J:"None",K:"None",g:"#FD9352",L:"None",M:0,N:0,aI:50,A:"#A0A0A0",x:"visible",O:0,B:"#A0A0A0",k:"div",aJ:50,C:"#A0A0A0",z:"10",P:0,D:"#A0A0A0",aK:50,j:"absolute",aL:50,a:-109,b:25},"14":{aV:8,w:"5",x:"visible",a:-85,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"11",k:"div",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",aT:8,j:"absolute",t:64,b:28,aU:8,G:"#FFFFFF"},"12":{aV:8,w:"M",x:"visible",a:-257,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"7",k:"div",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",aT:8,j:"absolute",t:64,b:28,aU:8,G:"#FFFFFF"},"6":{c:100,d:100,I:"None",J:"None",K:"None",g:"#FD9352",L:"None",M:0,N:0,aI:50,A:"#A0A0A0",x:"visible",O:0,B:"#A0A0A0",k:"div",aJ:50,C:"#A0A0A0",z:"2",P:0,D:"#A0A0A0",aK:50,j:"absolute",aL:50,a:-443,b:25},"10":{aV:8,w:"H",x:"visible",a:-424,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"3",k:"div",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",aT:8,j:"absolute",t:64,b:28,aU:8,G:"#FFFFFF"}},backgroundColor:"#F7F7F7",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("index_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

