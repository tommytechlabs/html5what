//	HYPE.documents["features"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "features_Resources";
	var documentName = "features";
	var documentLoaderFilename = "features_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"7":{o:"content-box",h:"HTML5_Performance_128.png",x:"visible",a:762,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{type:5,goToURL:"#performance",openInNewWindow:false},k:"div",z:"6",d:128,c:128,aP:"pointer"},"3":{o:"content-box",h:"HTML5_Connectivity_128.png",x:"visible",a:384,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{type:5,goToURL:"#connectivity",openInNewWindow:false},k:"div",z:"2",d:128,c:128,aP:"pointer"},"8":{o:"content-box",h:"HTML5_Semantics_128.png",x:"visible",a:0,q:"100% 100%",b:1,j:"absolute",r:"inline",aA:{type:5,goToURL:"#semantics",openInNewWindow:false},k:"div",z:"7",d:128,c:128,aP:"pointer"},"4":{o:"content-box",h:"HTML5_Device_Access_128.png",x:"visible",a:256,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{type:5,goToURL:"#device",openInNewWindow:false},k:"div",z:"3",d:128,c:128,aP:"pointer"},"9":{o:"content-box",h:"HTML5_Styling_128.png",x:"visible",a:872,q:"100% 100%",b:1,j:"absolute",r:"inline",aA:{type:5,goToURL:"#css3",openInNewWindow:false},k:"div",z:"8",d:128,c:128,aP:"pointer"},"5":{o:"content-box",h:"HTML5_Multimedia_128.png",x:"visible",a:512,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{type:5,goToURL:"#multimedia",openInNewWindow:false},k:"div",z:"4",d:128,c:128,aP:"pointer"},"6":{o:"content-box",h:"HTML5_Offline_Storage_128.png",x:"visible",a:128,q:"100% 100%",b:1,j:"absolute",r:"inline",aA:{type:5,goToURL:"#offline",openInNewWindow:false},k:"div",z:"5",d:128,c:128,aP:"pointer"},"2":{o:"content-box",h:"HTML5_3D_effects_128.png",x:"visible",a:640,q:"100% 100%",b:1,j:"absolute",r:"inline",aA:{type:5,goToURL:"#graphics",openInNewWindow:false},k:"div",z:"1",d:128,c:128,aP:"pointer"}},backgroundColor:"",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("features_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

