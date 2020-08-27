/*
 * 
 * TableSorter 2.0 - Client-side table sorting with ease!
 * Version 2.0.5b
 * @requires jQuery v1.2.3
 * 
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
/**
 * 
 * @description Create a sortable table with multi-column sorting capabilitys
 * 
 * @example $('table').tablesorter();
 * @desc Create a simple tablesorter interface.
 * 
 * @example $('table').tablesorter({ sortList:[[0,0],[1,0]] });
 * @desc Create a tablesorter interface and sort on the first and secound column column headers.
 * 
 * @example $('table').tablesorter({ headers: { 0: { sorter: false}, 1: {sorter: false} } });
 *          
 * @desc Create a tablesorter interface and disableing the first and second  column headers.
 *      
 * 
 * @example $('table').tablesorter({ headers: { 0: {sorter:"integer"}, 1: {sorter:"currency"} } });
 * 
 * @desc Create a tablesorter interface and set a column parser for the first
 *       and second column.
 * 
 * 
 * @param Object
 *            settings An object literal containing key/value pairs to provide
 *            optional settings.
 * 
 * 
 * @option String cssHeader (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead of the table. Default value:
 *         "header"
 * 
 * @option String cssAsc (optional) A string of the class name to be appended to
 *         sortable tr elements in the thead on a ascending sort. Default value:
 *         "headerSortUp"
 * 
 * @option String cssDesc (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead on a descending sort. Default
 *         value: "headerSortDown"
 * 
 * @option String sortInitialOrder (optional) A string of the inital sorting
 *         order can be asc or desc. Default value: "asc"
 * 
 * @option String sortMultisortKey (optional) A string of the multi-column sort
 *         key. Default value: "shiftKey"
 * 
 * @option String textExtraction (optional) A string of the text-extraction
 *         method to use. For complex html structures inside td cell set this
 *         option to "complex", on large tables the complex option can be slow.
 *         Default value: "simple"
 * 
 * @option Object headers (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortList (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortForce (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         prepended to user-selected rules. Default value: null
 * 
 * @option Boolean sortLocaleCompare (optional) Boolean flag indicating whatever
 *         to use String.localeCampare method or not. Default set to true.
 * 
 * 
 * @option Array sortAppend (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         appended to user-selected rules. Default value: null
 * 
 * @option Boolean widthFixed (optional) Boolean flag indicating if tablesorter
 *         should apply fixed widths to the table columns. This is usefull when
 *         using the pager companion plugin. This options requires the dimension
 *         jquery plugin. Default value: false
 * 
 * @option Boolean cancelSelection (optional) Boolean flag indicating if
 *         tablesorter should cancel selection of the table headers text.
 *         Default value: true
 * 
 * @option Boolean debug (optional) Boolean flag indicating if tablesorter
 *         should display debuging information usefull for development.
 * 
 * @type jQuery
 * 
 * @name tablesorter
 * 
 * @cat Plugins/Tablesorter
 * 
 * @author Christian Bach/christian.bach@polyester.se
 */

!function($){$.extend({tablesorter:new function(){function benchmark(a,b){log(a+","+((new Date).getTime()-b.getTime())+"ms")}function log(a){"undefined"!=typeof console&&"undefined"!=typeof console.debug?console.log(a):alert(a)}function buildParserCache(a,b){if(a.config.debug)var c="";if(0!=a.tBodies.length){var d=a.tBodies[0].rows;if(d[0])for(var e=[],f=d[0].cells,g=f.length,h=0;h<g;h++){var i=!1;$.metadata&&$(b[h]).metadata()&&$(b[h]).metadata().sorter?i=getParserById($(b[h]).metadata().sorter):a.config.headers[h]&&a.config.headers[h].sorter&&(i=getParserById(a.config.headers[h].sorter)),i||(i=detectParserForColumn(a,d,-1,h)),a.config.debug&&(c+="column:"+h+" parser:"+i.id+"\n"),e.push(i)}return a.config.debug&&log(c),e}}function detectParserForColumn(a,b,c,d){for(var e=parsers.length,f=!1,g=!1,h=!0;""==g&&h;)c++,b[c]?(f=getNodeFromRowAndCellIndex(b,c,d),g=trimAndGetNodeText(a.config,f),a.config.debug&&log("Checking if value was empty on row:"+c)):h=!1;for(var i=1;i<e;i++)if(parsers[i].is(g,a,f))return parsers[i];return parsers[0]}function getNodeFromRowAndCellIndex(a,b,c){return a[b].cells[c]}function trimAndGetNodeText(a,b){return $.trim(getElementText(a,b))}function getParserById(a){for(var b=parsers.length,c=0;c<b;c++)if(parsers[c].id.toLowerCase()==a.toLowerCase())return parsers[c];return!1}function buildCache(a){if(a.config.debug)var b=new Date;for(var c=a.tBodies[0]&&a.tBodies[0].rows.length||0,d=a.tBodies[0].rows[0]&&a.tBodies[0].rows[0].cells.length||0,e=a.config.parsers,f={row:[],normalized:[]},g=0;g<c;++g){var h=$(a.tBodies[0].rows[g]),i=[];if(h.hasClass(a.config.cssChildRow))f.row[f.row.length-1]=f.row[f.row.length-1].add(h);else{f.row.push(h);for(var j=0;j<d;++j)i.push(e[j].format(getElementText(a.config,h[0].cells[j]),a,h[0].cells[j]));i.push(f.normalized.length),f.normalized.push(i),i=null}}return a.config.debug&&benchmark("Building cache for "+c+" rows:",b),f}function getElementText(a,b){var c="";return b?(a.supportsTextContent||(a.supportsTextContent=b.textContent||!1),c="simple"==a.textExtraction?a.supportsTextContent?b.textContent:b.childNodes[0]&&b.childNodes[0].hasChildNodes()?b.childNodes[0].innerHTML:b.innerHTML:"function"==typeof a.textExtraction?a.textExtraction(b):$(b).text()):""}function appendToTable(a,b){if(a.config.debug)var c=new Date;for(var d=b,e=d.row,f=d.normalized,g=f.length,h=f[0].length-1,i=$(a.tBodies[0]),j=[],k=0;k<g;k++){var l=f[k][h];if(j.push(e[l]),!a.config.appender)for(var m=e[l].length,n=0;n<m;n++)i[0].appendChild(e[l][n])}a.config.appender&&a.config.appender(a,j),j=null,a.config.debug&&benchmark("Rebuilt table:",c),applyWidget(a),setTimeout(function(){$(a).trigger("sortEnd")},0)}function buildHeaders(a){if(a.config.debug)var b=new Date;var d=(!!$.metadata,computeTableHeaderCellIndexes(a));return $tableHeaders=$(a.config.selectorHeaders,a).each(function(b){if(this.column=d[this.parentNode.rowIndex+"-"+this.cellIndex],this.order=formatSortingOrder(a.config.sortInitialOrder),this.count=this.order,(checkHeaderMetadata(this)||checkHeaderOptions(a,b))&&(this.sortDisabled=!0),checkHeaderOptionsSortingLocked(a,b)&&(this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(a,b)),!this.sortDisabled){var c=$(this).addClass(a.config.cssHeader);a.config.onRenderHeader&&a.config.onRenderHeader.apply(c)}a.config.headerList[b]=this}),a.config.debug&&(benchmark("Built headers:",b),log($tableHeaders)),$tableHeaders}function computeTableHeaderCellIndexes(a){for(var b=[],c={},d=a.getElementsByTagName("THEAD")[0],e=d.getElementsByTagName("TR"),f=0;f<e.length;f++)for(var g=e[f].cells,h=0;h<g.length;h++){var n,i=g[h],j=i.parentNode.rowIndex,k=j+"-"+i.cellIndex,l=i.rowSpan||1,m=i.colSpan||1;"undefined"==typeof b[j]&&(b[j]=[]);for(var o=0;o<b[j].length+1;o++)if("undefined"==typeof b[j][o]){n=o;break}c[k]=n;for(var o=j;o<j+l;o++){"undefined"==typeof b[o]&&(b[o]=[]);for(var p=b[o],q=n;q<n+m;q++)p[q]="x"}}return c}function checkCellColSpan(a,b,c){for(var d=[],e=a.tHead.rows,f=e[c].cells,g=0;g<f.length;g++){var h=f[g];h.colSpan>1?d=d.concat(checkCellColSpan(a,headerArr,c++)):(1==a.tHead.length||h.rowSpan>1||!e[c+1])&&d.push(h)}return d}function checkHeaderMetadata(a){return!(!$.metadata||$(a).metadata().sorter!==!1)}function checkHeaderOptions(a,b){return!(!a.config.headers[b]||a.config.headers[b].sorter!==!1)}function checkHeaderOptionsSortingLocked(a,b){return!(!a.config.headers[b]||!a.config.headers[b].lockedOrder)&&a.config.headers[b].lockedOrder}function applyWidget(a){for(var b=a.config.widgets,c=b.length,d=0;d<c;d++)getWidgetById(b[d]).format(a)}function getWidgetById(a){for(var b=widgets.length,c=0;c<b;c++)if(widgets[c].id.toLowerCase()==a.toLowerCase())return widgets[c]}function formatSortingOrder(a){return"Number"!=typeof a?"desc"==a.toLowerCase()?1:0:1==a?1:0}function isValueInArray(a,b){for(var c=b.length,d=0;d<c;d++)if(b[d][0]==a)return!0;return!1}function setHeadersCss(a,b,c,d){b.removeClass(d[0]).removeClass(d[1]);var e=[];b.each(function(a){this.sortDisabled||(e[this.column]=$(this))});for(var f=c.length,g=0;g<f;g++)e[c[g][0]].addClass(d[c[g][1]])}function fixColumnWidth(a,b){var c=a.config;if(c.widthFixed){var d=$("<colgroup>");$("tr:first td",a.tBodies[0]).each(function(){d.append($("<col>").css("width",$(this).width()))}),$(a).prepend(d)}}function updateHeaderSortCount(a,b){for(var c=a.config,d=b.length,e=0;e<d;e++){var f=b[e],g=c.headerList[f[0]];g.count=f[1],g.count++}}function multisort(table,sortList,cache){if(table.config.debug)var sortTime=new Date;for(var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length,i=0;i<l;i++){var c=sortList[i][0],order=sortList[i][1],s="text"==table.config.parsers[c].type?0==order?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c):0==order?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c),e="e"+i;dynamicExp+="var "+e+" = "+s,dynamicExp+="if("+e+") { return "+e+"; } ",dynamicExp+="else { "}var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++)dynamicExp+="}; ";return dynamicExp+="return 0; ",dynamicExp+="}; ",table.config.debug&&benchmark("Evaling expression:"+dynamicExp,new Date),eval(dynamicExp),cache.normalized.sort(sortWrapper),table.config.debug&&benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime),cache}function makeSortFunction(a,b,c){var d="a["+c+"]",e="b["+c+"]";return"text"==a&&"asc"==b?"("+d+" == "+e+" ? 0 : ("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : ("+d+" < "+e+") ? -1 : 1 )));":"text"==a&&"desc"==b?"("+d+" == "+e+" ? 0 : ("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : ("+e+" < "+d+") ? -1 : 1 )));":"numeric"==a&&"asc"==b?"("+d+" === null && "+e+" === null) ? 0 :("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : "+d+" - "+e+"));":"numeric"==a&&"desc"==b?"("+d+" === null && "+e+" === null) ? 0 :("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : "+e+" - "+d+"));":void 0}function makeSortText(a){return"((a["+a+"] < b["+a+"]) ? -1 : ((a["+a+"] > b["+a+"]) ? 1 : 0));"}function makeSortTextDesc(a){return"((b["+a+"] < a["+a+"]) ? -1 : ((b["+a+"] > a["+a+"]) ? 1 : 0));"}function makeSortNumeric(a){return"a["+a+"]-b["+a+"];"}function makeSortNumericDesc(a){return"b["+a+"]-a["+a+"];"}function sortText(a,b){return table.config.sortLocaleCompare?a.localeCompare(b):a<b?-1:a>b?1:0}function sortTextDesc(a,b){return table.config.sortLocaleCompare?b.localeCompare(a):b<a?-1:b>a?1:0}function sortNumeric(a,b){return a-b}function sortNumericDesc(a,b){return b-a}function getCachedSortType(a,b){return a[b].type}var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:!0,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:!1,cancelSelection:!0,sortList:[],headerList:[],dateFormat:"us",decimal:"/.|,/g",onRenderHeader:null,selectorHeaders:"thead th",debug:!1},this.benchmark=benchmark,this.construct=function(a){return this.each(function(){if(this.tHead&&this.tBodies){var b,d,e,f;this.config={},f=$.extend(this.config,$.tablesorter.defaults,a),b=$(this),$.data(this,"tablesorter",f),d=buildHeaders(this),this.config.parsers=buildParserCache(this,d),e=buildCache(this);var i=[f.cssDesc,f.cssAsc];fixColumnWidth(this),d.click(function(a){var c=b[0].tBodies[0]&&b[0].tBodies[0].rows.length||0;if(!this.sortDisabled&&c>0){b.trigger("sortStart");var h=($(this),this.column);if(this.order=this.count++%2,this.lockedOrder&&(this.order=this.lockedOrder),a[f.sortMultiSortKey])if(isValueInArray(h,f.sortList))for(var k=0;k<f.sortList.length;k++){var l=f.sortList[k],m=f.headerList[l[0]];l[0]==h&&(m.count=l[1],m.count++,l[1]=m.count%2)}else f.sortList.push([h,this.order]);else{if(f.sortList=[],null!=f.sortForce)for(var j=f.sortForce,k=0;k<j.length;k++)j[k][0]!=h&&f.sortList.push(j[k]);f.sortList.push([h,this.order])}return setTimeout(function(){setHeadersCss(b[0],d,f.sortList,i),appendToTable(b[0],multisort(b[0],f.sortList,e))},1),!1}}).mousedown(function(){if(f.cancelSelection)return this.onselectstart=function(){return!1},!1}),b.bind("update",function(){var a=this;setTimeout(function(){a.config.parsers=buildParserCache(a,d),e=buildCache(a)},1)}).bind("updateCell",function(a,b){var c=this.config,d=[b.parentNode.rowIndex-1,b.cellIndex];e.normalized[d[0]][d[1]]=c.parsers[d[1]].format(getElementText(c,b),b)}).bind("sorton",function(a,b){$(this).trigger("sortStart"),f.sortList=b;var c=f.sortList;updateHeaderSortCount(this,c),setHeadersCss(this,d,c,i),appendToTable(this,multisort(this,c,e))}).bind("appendCache",function(){appendToTable(this,e)}).bind("applyWidgetId",function(a,b){getWidgetById(b).format(this)}).bind("applyWidgets",function(){applyWidget(this)}),$.metadata&&$(this).metadata()&&$(this).metadata().sortlist&&(f.sortList=$(this).metadata().sortlist),f.sortList.length>0&&b.trigger("sorton",[f.sortList]),applyWidget(this)}})},this.addParser=function(a){for(var b=parsers.length,c=!0,d=0;d<b;d++)parsers[d].id.toLowerCase()==a.id.toLowerCase()&&(c=!1);c&&parsers.push(a)},this.addWidget=function(a){widgets.push(a)},this.formatFloat=function(a){var b=parseFloat(a);return isNaN(b)?0:b},this.formatInt=function(a){var b=parseInt(a);return isNaN(b)?0:b},this.isDigit=function(a,b){return/^[-+]?\d*$/.test($.trim(a.replace(/[,.']/g,"")))},this.clearTableBody=function(a){function b(){for(;this.firstChild;)this.removeChild(this.firstChild)}$.browser.msie?b.apply(a.tBodies[0]):a.tBodies[0].innerHTML=""}}}),$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(a){return!0},format:function(a){return $.trim(a.toLocaleLowerCase())},type:"text"}),ts.addParser({id:"digit",is:function(a,b){var c=b.config;return $.tablesorter.isDigit(a,c)},format:function(a){return $.tablesorter.formatFloat(a)},type:"numeric"}),ts.addParser({id:"currency",is:function(a){return/^[Â£$â‚¬?.]/.test(a)},format:function(a){return $.tablesorter.formatFloat(a.replace(new RegExp(/[Â£$â‚¬]/g),""))},type:"numeric"}),ts.addParser({id:"ipAddress",is:function(a){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(a)},format:function(a){for(var b=a.split("."),c="",d=b.length,e=0;e<d;e++){var f=b[e];c+=2==f.length?"0"+f:f}return $.tablesorter.formatFloat(c)},type:"numeric"}),ts.addParser({id:"url",is:function(a){return/^(https?|ftp|file):\/\/$/.test(a)},format:function(a){return jQuery.trim(a.replace(new RegExp(/(https?|ftp|file):\/\//),""))},type:"text"}),ts.addParser({id:"isoDate",is:function(a){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},format:function(a){return $.tablesorter.formatFloat(""!=a?new Date(a.replace(new RegExp(/-/g),"/")).getTime():"0")},type:"numeric"}),ts.addParser({id:"percent",is:function(a){return/\%$/.test($.trim(a))},format:function(a){return $.tablesorter.formatFloat(a.replace(new RegExp(/%/g),""))},type:"numeric"}),ts.addParser({id:"usLongDate",is:function(a){return a.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))},format:function(a){return $.tablesorter.formatFloat(new Date(a).getTime())},type:"numeric"}),ts.addParser({id:"shortDate",is:function(a){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(a)},format:function(a,b){var c=b.config;return a=a.replace(/\-/g,"/"),"us"==c.dateFormat?a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2"):"uk"==c.dateFormat?a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1"):"dd/mm/yy"!=c.dateFormat&&"dd-mm-yy"!=c.dateFormat||(a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3")),$.tablesorter.formatFloat(new Date(a).getTime())},type:"numeric"}),ts.addParser({id:"time",is:function(a){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(a)},format:function(a){return $.tablesorter.formatFloat(new Date("2000/01/01 "+a).getTime())},type:"numeric"}),ts.addParser({id:"metadata",is:function(a){return!1},format:function(a,b,c){var d=b.config,e=d.parserMetadataName?d.parserMetadataName:"sortValue";return $(c).metadata()[e]},type:"numeric"}),ts.addWidget({id:"zebra",format:function(a){if(a.config.debug)var b=new Date;var c,e,d=-1;$("tr:visible",a.tBodies[0]).each(function(b){c=$(this),c.hasClass(a.config.cssChildRow)||d++,e=d%2==0,c.removeClass(a.config.widgetZebra.css[e?0:1]).addClass(a.config.widgetZebra.css[e?1:0])}),a.config.debug&&$.tablesorter.benchmark("Applying Zebra widget",b)}})}(jQuery);