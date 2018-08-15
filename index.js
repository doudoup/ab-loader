module.exports = function(source, map) {
  this.callback(
    null,
    source.replace(/'el-/g, '\'ab-').replace(/<el-/g, '<ab-').replace(/\/el-/g, '/ab-').replace(/"el-/g, '"ab-').replace(/`el-/g, '\`ab-').replace(/ el-/g, ' ab-').replace(/\.el-/g, '.ab-').replace(/=el-/g, '=ab-').replace(/El/g, 'Ab').replace(/Abement/g, 'Element').replace(/popperAbm/g, 'popperElm').replace(/referenceAbm/g, 'referenceElm').replace(/AbemeFE/g, 'ElemeFE').replace(/element-ui\//g, 'element-ui-prefix\/'),
    map
  );
};
  