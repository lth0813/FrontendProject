function follow1() {
    document.getElementById('unfollow1').style.display='inline'
    document.getElementById('follow1').style.display='none';
}
function follow2() {
    document.getElementById('unfollow2').style.display='inline'
    document.getElementById('follow2').style.display='none';
}
function follow3() {
    document.getElementById('unfollow3').style.display='inline'
    document.getElementById('follow3').style.display='none';
}
function follow4() {
    document.getElementById('unfollow4').style.display='inline'
    document.getElementById('follow4').style.display='none';
}
function follow5() {
    document.getElementById('unfollow5').style.display='inline'
    document.getElementById('follow5').style.display='none';
}
function unfollow1() {
    document.getElementById('unfollow1').style.display='none'
    document.getElementById('follow1').style.display='inline';
}
function unfollow2() {
    document.getElementById('unfollow2').style.display='none'
    document.getElementById('follow2').style.display='inline';
}
function unfollow3() {
    document.getElementById('unfollow3').style.display='none'
    document.getElementById('follow3').style.display='inline';
}
function unfollow4() {
    document.getElementById('unfollow4').style.display='none'
    document.getElementById('follow4').style.display='inline';
}
function unfollow5() {
    document.getElementById('unfollow5').style.display='none'
    document.getElementById('follow5').style.display='inline';
}
function good() {
    document.getElementById('emptyheart').style.display='none'
    document.getElementById('redheart').style.display='inline';
}
function cancelgood() {
    document.getElementById('emptyheart').style.display='inline'
    document.getElementById('redheart').style.display='none';
}
function save() {
    document.getElementById('tosave').style.display='none'
    document.getElementById('tocancel').style.display='inline';
}
function cancelsave() {
    document.getElementById('tosave').style.display='inline'
    document.getElementById('tocancel').style.display='none';
}
function opensearch() {
    document.getElementById('left-sidebar').style.display='none'
    document.getElementById('small-left-side').style.display='flex'
    document.getElementById('search-menu').style.display='flex'
    document.getElementById('search1').style.border='solid 1px lightgray';
    document.getElementById('search1').style.borderRadius='10px';
}
function closesearch() {
    document.getElementById('left-sidebar').style.display='flex'
    document.getElementById('small-left-side').style.display='none'
    document.getElementById('search-menu').style.display='none'
}
function openlils() {
    document.getElementById('section').style.display='none'
    document.getElementById('head').style.display='none'
    document.getElementById('right-sidebar').style.display='none'
    document.getElementById('section2').style.display='flex'
}