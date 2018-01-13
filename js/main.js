$(() => {
    let $pics = $('#window > #wrapper > img')
    let n = 0
    let $window = $('#window')
    let timer = autoPlay()
    $(document).on('visibilitychange',() => {
        if(document.hidden){
            clearInterval(timer)
        }else{
            timer = autoPlay()
        }
    })
    $window.hover(() => {
        clearInterval(timer)
    },() => {
        timer = autoPlay()
    })

    // 工具函数
    function autoPlay() {
        return setInterval(() => {
            leaveStatus(getNode()).one('transitionend', (event) => {
                enterStatus($(event.currentTarget))
            })
            n++
            currentStatus(getNode())
        }, 2500)
    }
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