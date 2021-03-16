    let btn
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let  doodlerLeftSpace = 50
    let  doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5
    let platform = []
    let upTimerId
    let downTimerId


window.addEventListener('load', ()=>{
        btn =   document.createElement('button')
        btn.innerHTML = '<i class="fas fa-running"></i>'
        btn.style.width = "50px"
        btn.style.height = "20px"
        btn.style.backgroundColor = "green"
        btn.classList.add('btn')
grid.appendChild(btn)
     
btn.addEventListener('click' , ()=>{
    start()
    grid.removeChild(btn)
   
})

})


    function createDoodler(){
        doodler.innerHTML = '<i class="fas fa-bomb"></i>'
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left =  doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
        
    }


    class Platform{
        constructor(newPlatBottom){
                this.bottom = newPlatBottom
                this.left = Math.random()*315
                this.visual = document.createElement('div')

                const visual = this.visual
                visual.classList.add('platform')
                visual.style.left = this.left + 'px'
                visual.style.bottom = this.bottom + 'px'
                grid.appendChild(visual)
        }

    }

    function createPlatforms(){
        for(let i = 0; i< platformCount; i++){
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            platform.push(newPlatform)
        }
    }

    console.log(platform)

    function movePlatforms(){
        if(doodlerBottomSpace > 200){
            platform.forEach(platform =>{
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'
            })
        }
    }
    function jump(){
        clearInterval(downTimerId)
        
        upTimerId = setInterval(function() {
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'

            if(doodlerBottomSpace > 350){
                fall()
            }
        

        }, 1000)
    }

    function fall(){
        clearInterval(upTimerId)

        downTimerId = setInterval(function (){
            doodlerBottomSpace -=5
            doodler.style.bottom = doodlerBottomSpace + 'px'
             if(doodlerBottomSpace <= 0  ){
            gameover()
        }
        },30)

       
    }

    function gameover(){
        console.log('h')
        isGameOver = true
        clearInterval(upTimerId)
        clearInterval(downTimerId)
    }

    function start() {
        if(!isGameOver){
                createDoodler()
                createPlatforms()
            setInterval(movePlatforms, 30)
            jump()
                
                
        }
    }
    