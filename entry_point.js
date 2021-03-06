/**
 * LND(loose-node-doc).
 */
var LND = {
  //for autocompletion of langauge choices
  langs: require("./src/outputs/lang/langs_list"),
  //for autocompletion of option keys
  option_keys: require("./src/Options/option_keys"),
  //templates
  templates:require("./src/arrange/html_page/templates_list/templates_list")
};
/**
 * Creates html document output.
 * @param {object} app_root_object
 * @param {object} options
 */
LND.generate = function(object, options = {}) {
  //subsections and notifieers of main process
  var processMediator = require("./src/processMediator");
  //"verbose:true" is required when validating options.
  this.options = { verbose: true };
  //first of all, the system needs messages for anything.
  //initializing and updateing options(overriding blanks with default, and checking types)
  this.options = processMediator.validateOptions(options);
  //[verbose,lang] are updated.
  //now messages can be fully loaded.
  processMediator.console.updateMessages(this.options);
  //notify continue or quit on undefined object.
  processMediator.checkObjectStatus(object);
  //now create ProjectInfo
  var getProjectInfo = require("./src/ProjectInfo/getProjectInfo");
  this.pi = getProjectInfo(this.options);
  /**
   * From here is the main process.
   */
  /**
   * list up all the object names
   */
  //worst scenario is that return could be an empty object.
  var obj_names = processMediator.listObjectNames(object);
  //ignore object by user defined ignore_objects option.
  obj_names = processMediator.ignoreObjectNames(
    obj_names,
    this.options.ignore_objects
  );
  /**
   * traverses require cache and returns an array
   */
  //{"path":{exports[names/codes],parent},...}
  var cache_tree = processMediator.listCacheTree();
  //removes paths by pre-defined sets
  //works only enable_default_ignore_paths is true
  cache_tree = processMediator.ignoreCTreeByDefault(
    cache_tree,
    this.options,
    this.pi
  );
  //console.log("ignored ctree:"+JSON.stringify(cache_tree,null," "));
  //removes paths by user defined paths array
  cache_tree = processMediator.ignoreCTreeByUserDefinition(
    cache_tree,
    this.options,
    this.pi
  );
  //console.log("default ignored:"+JSON.stringify(cache_tree,null," "));
  /**
   * Now the project is traversed by object itself and require cache.
   * Next step is to combine those informations into one tree information.
   */
  var otree = processMediator.resolveObjectTree(
    this.pi,
    obj_names,
    cache_tree
  );
  /**
   * All preparations are done, now parse comments
   */
  otree = processMediator.parseComments(otree, cache_tree, this.pi);
  //notify user about the number of resolved comments
  processMediator.notifyResolvedCommentsCount(otree);
  //make html into page
  html = processMediator.makeHtmlPage(otree, this.options, this.pi);
  //write html to file
  processMediator.writeHtmlPage(html, this.options, this.pi);
  //write datas on demand.
  processMediator.writeObjectTree(this.pi, this.options, otree);
  //writes log
  processMediator.writeLogs(this.pi, this.options);
  //end of the whole process.
};

module.exports = LND;