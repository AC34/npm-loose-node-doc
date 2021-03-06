/**
 * This US.js file is the default language of the system. Any other translated languaeges must follow keys defined in this file.
 * keys must be in lowercase.
 * Every argument is an object.
 * Refacotoring on keys should always be done cross project wide, do not jsut edit on this file only.
 */
module.exports = {
  /**
   * @common-messages
   */
  "option-invalid-option-key":function(args={key:""}){
    return "Unknown option key of ["+args.key+"] was given. There is no such option available. This key will be ignored during the process.";
  },
  "option-wrong-datatype":function(args={key:"",expected:"",actual:""}){
    return "Option ["+args.key+"] expects data type of ["+args.expected+"]. However, ["+args.actual+"] was given."; 
  },
  "empty-object":function(){
    return "An empty object was given.";
  },
  "proceed-with-default":function(args={value:""}){
    if(typeof value==="object")value = JSON.stringify(args.value);
    return "Continuing process with default value ["+args.value+"].";
  },
  "empty-cache":function(){
    return "Traversed cache and found zero files loaded.";
  },
  "object_names_empty":function(){
    return "Could not find any object names.";
  },
  "zero-comments-resolved":function(){
    return "Zero comments resolved.";
  },
  /**
   * process notifications.
   */
  "process-stopped":function(){
    return "loose-node-doc process stopped.";
  },
  "process-options-loaded":function(){
    return "options loaded.";
  },
  "process-object-loaded":function(){
    return "object loaded.";
  },
  "process-object-names-loaded":function(args={number_of_keys:""}){
    return "["+args.number_of_keys+"] of object names loaded.";
  },
  "process-invalid-object-tree-path":function(args={path:""}){
    return "Given object tree path ["+args.path+"] was found to be invalid.";
  },
  "process-invalid-log-path":function(args={path:""}){
    return "Given log tree path ["+args.path+"] was found to be invalid.";
  },
  "process-error-on-writing-file":function(args={path:"",error:""}){
    return "Error occured while writing to ["+args.path+"].\nError["+args.error+"].";
  },
  "process-traversed-caches":function(args={number_of_caches:""}){
    return "Traversed cache and found ["+args.number_of_caches+"] files loaded.";
  },
  "process-ignored-objects":function(args={ignored_amount:""}){
    return "["+args.ignored_amount+"] object names ignored.";
  },
  "process-ignored-default-paths":function(args={ignored_amount:""}){
    return "Ignored ["+args.ignored_amount+"] paths from loaded cache by default ignore list[default-ignore-paths].";
  },
  "process-ignored-paths":function(args={ignored_amount:""}){
    return "Ignored ["+args.ignored_amount+"] paths from loaded cache by user defined list[ignore-paths].";
  },
  "process-resolved-comments":function(args={num:""}){
    return "Resolved ["+args.num+"] comments.";
  },
  "process-html-template-created":function(args={theme_name:""}){
    return "Created html page by theme["+args.theme_name+"]";
  },
  "process-write-html-success":function(args={path:""}){
    return "Successfully written html to ["+args.path+"]";
  },
  "process-write-html-failure":function(args={path:""}){
    return "Writing html to ["+args.path+"] failed.";
  },
  "process-write-file-success":function(args={path:""}){
    return "Successfuflly written file to ["+args.path+"]";
  },
  "process-write-file-failure":function(args={path:""}){
    return "Writing file to ["+args+path+"] failed.";
  }
}