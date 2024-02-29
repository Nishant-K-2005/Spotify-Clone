// Variables

let songIndex = 0
let audioElement = new Audio('Songs/0.mp3')
let mainPlayBtn = document.querySelector('#mainPlayBtn')
let mainPauseBtn = document.querySelector('#mainPauseBtn')
let ProgressBar = document.querySelector('#SongProgressBar')
let songItems = Array.from(document.querySelectorAll('.songItems'))
let play_btn = Array.from(document.querySelectorAll('.play-btn'))
let previousBtn = document.getElementById('previousBtn')
let nextBtn = document.getElementById('NextBtn')
let currentSong = document.querySelector('.currentSong')
let current_time = document.querySelector('#current_time')
let Duration = document.querySelector('#Duration')
let currentSongBannar = document.querySelector('#currentSongBannar')
let currentSongHeading = document.querySelector('#currentSongHeading')
let loopbtn = document.querySelector('#loopBtn')
let loopendbtn = document.querySelector('#loopendBtn')
let songstatusbar = document.querySelector('.songStatusBar')
let shuffelbtn = document.querySelector('#shuffelBtn')
let shuffelOnBtn = document.querySelector('#shuffelOnBtn')


// Songs List
let songs = [
    { songName: 'Sugar and Brownies', songDuration: '03:31', FilePath: 'Songs/0.mp3', coverPath: 'Cover/Sugar_Brownies_Cover.jpg' },
    { songName: 'Believer', songDuration: '03:36', FilePath: 'Songs/1.mp3', coverPath: 'Cover/BelieverCover.jpg' },
    { songName: 'Closer', songDuration: '04:21', FilePath: 'Songs/2.mp3', coverPath: 'Cover/CloserCover.jpg' },
    { songName: 'Montero', songDuration: '03:09', FilePath: 'Songs/3.mp3', coverPath: 'Cover/MonteroCover.png' },
    { songName: 'Safari', songDuration: '03:09', FilePath: 'Songs/4.mp3', coverPath: 'Cover/SafariCover.jpg' },
    { songName: 'Senorita', songDuration: '03:11', FilePath: 'Songs/5.mp3', coverPath: 'Cover/SenoritaCover.jpg' },
    { songName: 'Standing By You', songDuration: '02:45', FilePath: 'Songs/6.mp3', coverPath: 'Cover/StandingByYouCover.jpg' },
    { songName: 'The Nights', songDuration: '03:10', FilePath: 'Songs/7.mp3', coverPath: 'Cover/TheNightsCover.jpg' },
    { songName: 'Thrift Shop', songDuration: '03:52', FilePath: 'Songs/8.mp3', coverPath: 'Cover/ThriftShopCover.jpg' },
    { songName: 'Whoopty', songDuration: '02:04', FilePath: 'Songs/9.mp3', coverPath: 'Cover/WhooptyCover.png' },
    { songName: 'ДИКАЯ ЛЬВИЦА', songDuration: '02:44', FilePath: 'Songs/10.mp3', coverPath: 'Cover/AlexAndRusCover.jpg' },
    { songName: 'Mortals', songDuration: '03:48', FilePath: 'Songs/11.mp3', coverPath: 'Cover/MortalsCover.jpg' },
    { songName: 'Kosandra', songDuration: '02:58', FilePath: 'Songs/12.mp3', coverPath: 'Cover/KosandraCover.png' },
    { songName: 'No Glory', songDuration: '04:31', FilePath: 'Songs/13.mp3', coverPath: 'Cover/NoGlory.jpg' },
    { songName: 'Legends Never Die', songDuration: '03:55', FilePath: 'Songs/14.mp3', coverPath: 'Cover/LegendsNeverDie.jpg' },
    { songName: 'levitating', songDuration: '03:50', FilePath: 'Songs/15.mp3', coverPath: 'Cover/levitating.jpeg' },
    { songName: 'Thunder', songDuration: '02:40', FilePath: 'Songs/16.mp3', coverPath: 'Cover/thunder(GP).jpeg' },
    { songName: 'Fight Back', songDuration: '03:34', FilePath: 'Songs/17.mp3', coverPath: 'Cover/fightbackcover.jpg' },
    { songName: 'Love Story', songDuration: '03:56', FilePath: 'Songs/18.mp3', coverPath: 'Cover/lovestorycover.jpeg' },
    { songName: 'Unstoppable', songDuration: '04:06', FilePath: 'Songs/19.mp3', coverPath: 'Cover/UnstopableCover.jpg' },
    { songName: 'Ek Tarfa', songDuration: '03:54', FilePath: 'Songs/20.mp3', coverPath: 'Cover/EkTarfaCover.jpg' },
    { songName: 'Ek Tarfa Reprise', songDuration: '04:03', FilePath: 'Songs/21.mp3', coverPath: 'Cover/EkTarfaRepriseCover.jpg' },
    
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("song_name")[0].innerHTML = songs[i].songName
    element.getElementsByClassName("songDetail")[0].innerHTML = songs[i].songDuration
    
});

document.onkeydown = (KEY) => {
    // Play/Pause With Space Bar
    let KEYCODE = KEY.keyCode
    if (KEYCODE == 32 & (audioElement.paused || audioElement.currentTime <= 0) & songstatusbar.style.display == 'block') {
        audioElement.play()
        mainPlayBtn.style.display = 'none'
        mainPauseBtn.style.display = 'block'
    }
    else if (KEYCODE == 32) {
        audioElement.pause()
        mainPauseBtn.style.display = 'none'
        mainPlayBtn.style.display = 'block'
    }
    
    // play next song with 'N' button
    else if(KEYCODE == 78) {
        if (shuffelOnBtn.style.display == 'block'){
            RN = -1
            do{
                RN = Math.round(Math.random()*100)
            }while(RN>21)       // UPDATE THIS WHILE ADDING A SONG
            songIndex = RN
        }
        else{
            if (songIndex >= 21)// UPDATE THIS WHILE ADDING A SONG 
            {
                songIndex = 0
            }
            else {
                console.log(songIndex)
               songIndex = parseInt(songIndex)+1
                console.log(songIndex)
            }}
        audioElement.src = `Songs/${songIndex}.mp3`
        currentSong.innerHTML = songs[songIndex].songName
        currentSongBannar.src = songs[songIndex].coverPath
        currentSongHeading.innerHTML = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        mainPlayBtn.style.display = 'none'
        mainPauseBtn.style.display = 'block'
    }
    


    // play previous song with 'P' button
    else if(KEYCODE == 80){
        if (songIndex <= 0) {
            songIndex = 21 // UPDATE THIS WHILE ADDING A SONG
        }
        else {
            songIndex -= 1
        }
        audioElement.src = `Songs/${songIndex}.mp3`
        currentSong.innerHTML = songs[songIndex].songName
        currentSongBannar.src = songs[songIndex].coverPath
        currentSongHeading.innerHTML = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        mainPlayBtn.style.display = 'none'
        mainPauseBtn.style.display = 'block'
    }

    else if(KEYCODE == 37){
        audioElement.currentTime -= 5
    }
    else if(KEYCODE == 39){
        audioElement.currentTime += 5
    }


    else if(KEYCODE == 76){
        if(loopbtn.style.display == 'none'){
            loopbtn.style.display = 'block'
            loopendbtn.style.display = 'none'
        }
        else{
            loopbtn.style.display = 'none'
            loopendbtn.style.display = 'block'
        }
    }
}




// Listen To Events
shuffelbtn.addEventListener('click', () =>{
    shuffelbtn.style.display = 'none'
    shuffelOnBtn.style.display = 'block'
} )
shuffelOnBtn.addEventListener('click', () =>{
    shuffelbtn.style.display = 'block'
    shuffelOnBtn.style.display = 'none'
} )


loopendbtn.addEventListener('click', () => {
    loopbtn.style.display = 'block'
    loopendbtn.style.display = 'none'
})
loopbtn.addEventListener('click', () => {
    loopbtn.style.display = 'none'
    loopendbtn.style.display = 'block'
})

mainPlayBtn.addEventListener('click', () => {
    audioElement.play()
    mainPlayBtn.style.display = 'none'
    mainPauseBtn.style.display = 'block'
})

mainPauseBtn.addEventListener('click', () => {
    audioElement.pause()
    mainPauseBtn.style.display = 'none'
    mainPlayBtn.style.display = 'block'
})

nextBtn.addEventListener('click', () => {
    if (shuffelOnBtn.style.display == 'block'){
        if (shuffelOnBtn.style.display == 'block'){
            RN = -1
            do{
                RN = Math.round(Math.random()*100)
            }while(RN>21)       // UPDATE THIS WHILE ADDING A SONG
            songIndex = RN
        }
    }
    else{
        if (songIndex >= 21)// UPDATE THIS WHILE ADDING A SONG 
        {
            songIndex = 0
        }
        else {
            console.log(songIndex)
           songIndex = parseInt(songIndex)+1
            console.log(songIndex)
        }}
    audioElement.src = `Songs/${songIndex}.mp3`
    currentSong.innerHTML = songs[songIndex].songName
    currentSongBannar.src = songs[songIndex].coverPath
    currentSongHeading.innerHTML = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    mainPlayBtn.style.display = 'none'
    mainPauseBtn.style.display = 'block'
})

previousBtn.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 21 // UPDATE THIS WHILE ADDING A SONG
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `Songs/${songIndex}.mp3`
    currentSong.innerHTML = songs[songIndex].songName
    currentSongBannar.src = songs[songIndex].coverPath
    currentSongHeading.innerHTML = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    mainPlayBtn.style.display = 'none'
    mainPauseBtn.style.display = 'block'
})


audioElement.addEventListener('timeupdate', () => {

    if (audioElement.currentTime == audioElement.duration){
    
        if (loopbtn.style.display == 'block'){
            audioElement.currentTime = 0
            audioElement.play()
        }
        else{
            if (shuffelOnBtn.style.display == 'block'){
                    RN = -1
                    do{
                        RN = Math.round(Math.random()*100)
                    }while(RN>21)       // UPDATE THIS WHILE ADDING A SONG
                    songIndex = RN
            }
            else{
            if (songIndex >= 21) // UPDATE THIS WHILE ADDING A SONG
            {
                songIndex = 0
            }
            else {
                console.log(songIndex)
                songIndex = parseInt(songIndex)+1
                console.log(songIndex)
            }}
            audioElement.src = `Songs/${songIndex}.mp3`
            currentSong.innerHTML = songs[songIndex].songName
            currentSongBannar.src = songs[songIndex].coverPath
            currentSongHeading.innerHTML = songs[songIndex].songName
            audioElement.currentTime = 0
            audioElement.play()
            mainPlayBtn.style.display = 'none'
            mainPauseBtn.style.display = 'block'
    }}
    // Time Line of current song
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    ProgressBar.value = Progress
    min = 0o0
    sec = parseInt(audioElement.currentTime)
    while (sec >= 60){
        min = min + 0o1
        sec = parseInt(sec) - 60
    }
    if(sec<10 & min<10){
        current_time.innerHTML = `0${min}:0${sec}`
    }
    else if(min<10 & sec>=10){
        current_time.innerHTML = `0${min}:${sec}` 
    }
    else if(sec<10 & min>=10){
        current_time.innerHTML = `${min}:0${sec}`
    }
    else{
        current_time.innerHTML = `${min}:${sec}`
    }
    Duration.innerHTML = songs[songIndex].songDuration
    
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100
})


play_btn.forEach((element) => {
    element.addEventListener('click', (e) => {
        songstatusbar.style.display = 'block'
        songIndex = e.target.id
        audioElement.src = songs[songIndex].FilePath
        currentSong.innerText = songs[songIndex].songName
        currentSongBannar.src = songs[songIndex].coverPath
        currentSongHeading.innerHTML = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        mainPlayBtn.style.display = 'none'
        mainPauseBtn.style.display = 'block'
    })
})
