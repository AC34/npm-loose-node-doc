module.exports = {
  "lang":{
    key:"lang",
    data_type:"string",
    default:"en_US"
  },
  "write_object_tree":{
    key:"write_object_tree",
    data_type:"boolean",
    default:false
  },
  //from project root dir
  "object_tree_path":{
    key:"object_tree_path",
    data_type:"string",
    default:"out/loose_doc_tree.json"
  },
  "write_logs":{
    key:"write_logs",
    data_type:"boolean",
    default:false
  },
  //from project root dir
  "log_path":{
    key:"log_path",
    data_type:"string",
    default:"out/loose_doc_log.txt"
  },
  //console
  "verbose":{
  key:"verbose",
    data_type:"boolean",
    default:true
  },
  //bool
  "enable_default_ignore_paths":{
    key:"enable_default_ignore_paths",
    data_type:"boolean",
    default:true
  },
  //paths fromo user's build script
  "default_ignore_paths":{
    key:"default_ignore_paths",
    data_type:"array",
    default:["/node_modules/"]
  },
  "ignore_paths":{
    key:"ignore_paths",
    data_type:"array",
    default:[]
  },
  "ignore_objects":{
    key:"ignore_objects",
    data_type:"array",
    default:[]
  }
};