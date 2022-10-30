// functions
function selectBox()
{
	if ($('#selectAll').is(':checked'))
		$("input[name='select_item[]']:visible").prop('checked', true);
	else
		$("input[name='select_item[]']").prop('checked', false);
}

function selectF(i)	{if ($('#selectAllF'+i).is(':checked'))
						$('#FormF'+i+' option').prop("selected", true);
					 else
						$('#FormF'+i+' option').prop("selected", false);
					}
function clickF(i)	{$('#selectAllF'+i).prop("checked", false)}

function selectS()	{if ($('#selectAllS').is(':checked'))
						$('#FormSource option').prop("selected", true);
					 else
						$('#FormSource option').prop("selected", false);
					}
function clickS()	{$('#selectAllS').prop("checked", false)}

function display(i)
{
console.log($('#col'+i).is(':checked'));
	if ($('#col'+i).is(':checked'))
	{	$('td.col'+i).show(); $('th.col'+i).show()}
	else
	{	$('td.col'+i).hide(); $('th.col'+i).hide()}
}

/*
function display('VF')
{
	if ($("#colVF").is(':checked'))
	{	$("td.colVF").show(); $("th.colVF").show()}
	else
	{	$("td.colVF").hide(); $("th.colVF").hide()}
}
function display('VO')
{
	if ($("#colVO").is(':checked'))
	{	$("td.colVO").show(); $("th.colVO").show()}
	else
	{	$("td.colVO").hide(); $("th.colVO").hide()}
}
function display('S')
{
	if ($("#colS").is(':checked'))
	{	$("td.colS").show(); $("th.colS").show()}
	else
	{	$("td.colS").hide(); $("th.colS").hide()}
}
*/

function reset()
{
	$('#FormF1 option').prop("selected", true);$('#FormF2 option').prop("selected", true);$('#FormF3 option').prop("selected", true);$('#FormF4 option').prop("selected", true);
	$('#FormSource').val("base");
//	$('#col1').prop("checked", true);$('#col2').prop("checked", true);$('#col3').prop("checked", true);$('#col4').prop("checked", true);$('#col5').prop("checked", true);$('#col6').prop("checked", true);
	$('#colVF').prop("checked", false);$('#colVO').prop("checked", false);$('#colS').prop("checked", false);
	$('#opt_tcoe').prop("checked", false);
	$("#myfilter").val("");
}

function filterUp() {
	$(".col1").slideUp(250);
	$(".col2").slideUp(250);
	$(".fa-chevron-up").toggle();
	$(".fa-chevron-down").toggle();
}

function filterDown() {
	$(".col1").slideDown(250);
	$(".col2").slideDown(250);
	$(".fa-chevron-up").toggle();
	$(".fa-chevron-down").toggle();
}

function clearFilter() {
	$("#myfilter").val("");
	filter();
}

function filter()
{
	var string = $("#myfilter").val().toLowerCase();
	$(".item").each(function() {
		var item = $(this).text().toLowerCase();
		if (!(item.includes(string)))
			$(this).parent().hide();
		else
			$(this).parent().show();
	});
}

// Sortable Lib

(function(c){c.fn.stupidtable=function(a){return this.each(function(){var b=c(this);a=a||{};a=c.extend({},c.fn.stupidtable.default_sort_fns,a);b.data("sortFns",a);b.stupidtable_build();b.on("click.stupidtable","thead th",function(){c(this).stupidsort()});b.find("th[data-sort-onload=yes]").eq(0).stupidsort()})};c.fn.stupidtable.default_settings={should_redraw:function(a){return!0},will_manually_build_table:!1};c.fn.stupidtable.dir={ASC:"asc",DESC:"desc"};c.fn.stupidtable.default_sort_fns={"int":function(a,
b){return parseInt(a,10)-parseInt(b,10)},"float":function(a,b){return parseFloat(a)-parseFloat(b)},string:function(a,b){return a.toString().localeCompare(b.toString())},"string-ins":function(a,b){a=a.toString().toLocaleLowerCase();b=b.toString().toLocaleLowerCase();return a.localeCompare(b)}};c.fn.stupidtable_settings=function(a){return this.each(function(){var b=c(this),f=c.extend({},c.fn.stupidtable.default_settings,a);b.stupidtable.settings=f})};c.fn.stupidsort=function(a){var b=c(this),f=b.data("sort")||
null;if(null!==f){var d=b.closest("table"),e={$th:b,$table:d,datatype:f};d.stupidtable.settings||(d.stupidtable.settings=c.extend({},c.fn.stupidtable.default_settings));e.compare_fn=d.data("sortFns")[f];e.th_index=h(e);e.sort_dir=k(a,e);b.data("sort-dir",e.sort_dir);d.trigger("beforetablesort",{column:e.th_index,direction:e.sort_dir,$th:b});d.css("display");setTimeout(function(){d.stupidtable.settings.will_manually_build_table||d.stupidtable_build();var a=l(e),a=m(a,e);if(d.stupidtable.settings.should_redraw(e)){d.children("tbody").append(a);
var a=e.$table,c=e.$th,f=c.data("sort-dir");a.find("th").data("sort-dir",null).removeClass("sorting-desc sorting-asc");c.data("sort-dir",f).addClass("sorting-"+f);d.trigger("aftertablesort",{column:e.th_index,direction:e.sort_dir,$th:b});d.css("display")}},10);return b}};c.fn.updateSortVal=function(a){var b=c(this);b.is("[data-sort-value]")&&b.attr("data-sort-value",a);b.data("sort-value",a);return b};c.fn.stupidtable_build=function(){return this.each(function(){var a=c(this),b=[];a.children("tbody").children("tr").each(function(a,
d){var e={$tr:c(d),columns:[],index:a};c(d).children("td").each(function(a,b){var d=c(b).data("sort-value");"undefined"===typeof d&&(d=c(b).text(),c(b).data("sort-value",d));e.columns.push(d)});b.push(e)});a.data("stupidsort_internaltable",b)})};var l=function(a){var b=a.$table.data("stupidsort_internaltable"),f=a.th_index,d=a.$th.data("sort-multicolumn"),d=d?d.split(","):[],e=c.map(d,function(b,d){var c=a.$table.find("th"),e=parseInt(b,10),f;e||0===e?f=c.eq(e):(f=c.siblings("#"+b),e=c.index(f));
return{index:e,$e:f}});b.sort(function(b,c){for(var d=e.slice(0),g=a.compare_fn(b.columns[f],c.columns[f]);0===g&&d.length;){var g=d[0],h=g.$e.data("sort"),g=(0,a.$table.data("sortFns")[h])(b.columns[g.index],c.columns[g.index]);d.shift()}return 0===g?b.index-c.index:g});a.sort_dir!=c.fn.stupidtable.dir.ASC&&b.reverse();return b},m=function(a,b){var f=c.map(a,function(a,c){return[[a.columns[b.th_index],a.$tr,c]]});b.column=f;return c.map(a,function(a){return a.$tr})},k=function(a,b){var f,d=b.$th,
e=c.fn.stupidtable.dir;a?f=a:(f=a||d.data("sort-default")||e.ASC,d.data("sort-dir")&&(f=d.data("sort-dir")===e.ASC?e.DESC:e.ASC));return f},h=function(a){var b=0,f=a.$th.index();a.$th.parents("tr").find("th").slice(0,f).each(function(){var a=c(this).attr("colspan")||1;b+=parseInt(a,10)});return b}})(jQuery);
