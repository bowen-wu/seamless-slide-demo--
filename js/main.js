$(() => {
    $pics = $('.window > .wrapper > img')
    let n = 0
    setInterval(() => {
        leaveStatus(getNode()).one('transitionend',(event) => {
            enterStatus($(event.currentTarget))
        })
        n++
        currentStatus(getNode())
    },2000)

    // 工具函数
    function getNode(){
        return $pics.eq(n % $pics.length)
    }
    function leaveStatus($node){
        return $node.removeClass('current').addClass('leave')
    }
    function enterStatus($node){
        $node.removeClass('leave').addClass('enter')
    }
    function currentStatus($node){
        $node.removeClass('enter').addClass('current')
    }
})