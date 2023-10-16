import logo from './logo.svg';
import './App.css';



const videos = [

  {

    id: 1,

    title: "I am A DANCER Funny Prank in Telugu",

    thumbnailUrl: "https://i.ytimg.com/vi/j4bfqk6kZDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCFx7E3kkEC8DVbHljxna9SF4yKA",

    likes: 39000,

    views: 140000,

    channelName: "FunPataka",

    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZMW2GonQZWtJDJaTmhu051i5qY0QrREKt7x7Nf=s176-c-k-c0x00ffffff-no-rj-mo",

  },

  {

    id: 2,

    title: "Village lo IPL Cricket fun",

    thumbnailUrl: "https://img.youtube.com/vi/neM1RAayBLk/maxresdefault.jpg",

    likes: 103000,

    views: 430000,

    channelName: "My Village Show",

    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZuMwj3KHh4pC22KoLK1QLOwymOe_i1Qo6MxamTFw=s176-c-k-c0x00ffffff-no-rj",

  },

  {

    id: 3,

    title: "Top Hits 2023 - New Popular Songs 2023 - Best English Songs",

    thumbnailUrl: "https://img.youtube.com/vi/LtMTOCDqS0w/maxresdefault.jpg",

    likes: 8670,

    views: 710000,

    channelName: "TOP Songs",

    channelLogoUrl: "https://yt3.ggpht.com/ls7qUAB-MvtV9liulp9bBRUuJffzx9K_HgIzlXJ6dGDqK03cdeqtJHHTLVy85_8YeM0IqcF8aA=s48-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 4,

    title: "A Day In The Life At AMERICAN PUBLIC SCHOOL",

    thumbnailUrl: "https://img.youtube.com/vi/FGvdNUgC5Kk/maxresdefault.jpg",

    likes: 31300,

    views: 740000,

    channelName: "Max Reisigner",

    channelLogoUrl: "https://yt3.ggpht.com/bJVN3bTXAXKtUt2QKRhyEKL_t4UjIBk0j2kvpPy002iMAHhzMwOoW2ps6di973ljftGafn_sNA=s48-c-k-c0x00ffffff-no-rj",

  },



  {
    id: 5,

    title: "Places To Visit In Alexandria Egypt",

    thumbnailUrl: "https://img.youtube.com/vi/QJcxu7DnXmY/maxresdefault.jpg",

    likes: 27000,

    views: 472000,

    channelName: "Naa Anveshana",

    channelLogoUrl: "https://yt3.ggpht.com/DLer1VC9KzQIOiTYFPrNXSndwrgXHplj6e4r0_JNkPcTaB0PfRwDQTPGWhhXoA12JiSGi991rCU=s48-c-k-c0x00ffffff-no-rj",

  },


  {
    id: 6,

    title: "iPhone 15 Series Unboxing & initial impressions in Telugu",

    thumbnailUrl: "https://img.youtube.com/vi/VHDs_oodK8k/maxresdefault.jpg",

    likes: 71000,

    views: 720000,

    channelName: "Prasadtechintelugu",

    channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYKCIigq902aAyGjeXz1dnyC3HwriVPLd7uJ3ByJw=s48-c-k-c0x00ffffff-no-rj",

  },



  {
    id: 7,

    title: "JAWAN: Not Ramaiya Vastavaiya",

    thumbnailUrl: "https://img.youtube.com/vi/ohS06vkHjLE/maxresdefault.jpg",

    likes: 100000,

    views: 6200000,

    channelName: "T-Series",

    channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYKCIigq902aAyGjeXz1dnyC3HwriVPLd7uJ3ByJw=s48-c-k-c0x00ffffff-no-rj",

  },


  {
    id: 8,

    title: "Anirudh's Rocking Performance of Hukum | Jailer Audio Launch",

    thumbnailUrl: "https://img.youtube.com/vi/nGeHstBtoH0/maxresdefault.jpg",

    likes: 63500,

    views: 2300000,

    channelName: "Sun TV",

    channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbonI2fEFXVxJYtWEqHjyY2k_i0N9a8CXyYo3lDiA=s48-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 9,

    title: "20 Times Yuji Nishida Shocked the World !!!",

    thumbnailUrl: "https://img.youtube.com/vi/c66RN87YjNE/maxresdefault.jpg",

    likes: 17800,

    views: 2500000,

    channelName: "Power Volleball",

    channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKaWfF5i90H7BWs5oe_4rAblM0F4R32z6Rs5hYbZ=s48-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 10,

    title: "Saina Nehwal Wins Badminton Women's Singles Bronze - IND v CHN",

    thumbnailUrl: "https://img.youtube.com/vi/HucIqi8Lw3E/maxresdefault.jpg",

    likes: 52000,

    views: 7800000,

    channelName: "Olympics",

    channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKZvtjOtcIGKAP-m8gMCgLXiKpL07LCql5BiqQvR6GA=s48-c-k-c0x00ffffff-no-rj",

  }
  ,
  {
    id: 11,

    title: "The Best Way to Host & Deploy a React Application",

    thumbnailUrl: "https://img.youtube.com/vi/Ey_90l9GaAw/maxresdefault.jpg",

    likes: 69000,

    views: 270000,

    channelName: "JavaScript Mastery",

    channelLogoUrl: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s48-c-k-c0x00ffffff-no-rj",

  }
,

{
  id: 12,

  title: "Launch of LVM3-M4/CHANDRAYAAN-3 Mission from Satish Dhawan Space Centre ",

  thumbnailUrl: "https://img.youtube.com/vi/q2ueCg9bvvQ/maxresdefault.jpg",

  likes: 969000,

  views: 2700000,

  channelName: "ISRO Official",

  channelLogoUrl: "https://yt3.ggpht.com/CzlVEHcdvYCY9xyQvmBSmRPQeMBTcoFqF8JbjC9KbEr-jN3vKJkCNgr4mB3ZKJvqMibZqHMr5hE=s48-c-k-c0x00ffffff-no-rj",

}
,

{
  id: 13,

  title: "Vidya Vox - Be Free (Pallivaalu Bhadravattakam) ft. Vandana Iyer",

  thumbnailUrl: "https://img.youtube.com/vi/eiGdsH1g20k/maxresdefault.jpg",

  likes: 280000,

  views: 40200000,

  channelName: "Vidya Vox",

  channelLogoUrl: "https://yt3.ggpht.com/hSCDWq8vVvZo_3bntP-MCWEEYMA_jiqlpFZ2wD178v0uLO0XTB1eLbeg8-j1qzRDzx9-mYai6g=s48-c-k-c0x00ffffff-no-nd-rj",

}
,
{
  id: 14,

  title: "Kannodu Kaanbathellam - Arya Dhayal (Live) - High On Music Getaway",

  thumbnailUrl: "https://img.youtube.com/vi/uF5e8SdNiBE/maxresdefault.jpg",

  likes: 603000,

  views: 3300000,

  channelName: "Wonderwall Media Network",

  channelLogoUrl: "https://yt3.ggpht.com/CVSc4h4yBy4pvkIk8IhvSKwba65MSTt77rcmI6FzFdRwh0gWk3NRxOSE2SD7o1aBl-z_X_M8ng=s48-c-k-c0x00ffffff-no-rj",

},

{
  id: 15,

  title: "Naacho Naacho (Full Video) RRR - NTR, Ram Charan | M M Kreem ",

  thumbnailUrl: "https://img.youtube.com/vi/sAzlWScHTc4/maxresdefault.jpg",

  likes: 320000,

  views: 38900000,

  channelName: "T-Series",

  channelLogoUrl: "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s48-c-k-c0x00ffffff-no-rj",

},


{
  id: 16,

  title: "JAILER - Hukum Lyric Video | Superstar Rajinikanth ",

  thumbnailUrl: "https://img.youtube.com/vi/1F3hm6MfR1k/maxresdefault.jpg",

  likes: 1100000,

  views: 8200000,

  channelName: "Sun TV",

  channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbonI2fEFXVxJYtWEqHjyY2k_i0N9a8CXyYo3lDiA=s48-c-k-c0x00ffffff-no-rj",

},


{
  id: 17,

  title: "O LACHA GUMMADI FOLK SONG | STUDIO VERSION",

  thumbnailUrl: "https://img.youtube.com/vi/fyeIUnVS474/maxresdefault.jpg",

  likes: 77000,

  views: 1840000,

  channelName: "MV MUSIC & MOVIES",

  channelLogoUrl: "https://yt3.ggpht.com/KlHi52cTKDJY4ViEp9zMp71m8i6VTdgQbe1U4zuyzHesDrEFB2G8nR9uNKwKDhsyjIAObitNYg=s48-c-k-c0x00ffffff-no-rj",

},


{
  id: 18,

  title: "ASLEF: Can people sympathise with striking rail workers?",

  thumbnailUrl: "https://img.youtube.com/vi/437-xCOlB7s/maxresdefault.jpg",

  likes: 27000,

  views: 140000,

  channelName: "Sky News",

  channelLogoUrl: "https://yt3.ggpht.com/E96qzkAoX81DQs7wqRHR4rNk1esa4quBPzda2QRzImlhoHOVgRdAN8o-S0Rb_hpygo_n4LdhwTE=s48-c-k-c0x00ffffff-no-rj",

},



{
  id: 19,

  title: "LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",

  thumbnailUrl: "https://img.youtube.com/vi/IqwIOlhfCak/maxresdefault.jpg",

  likes: 110000,

  views: 1400000,

  channelName: "Sony Music South",

  channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s48-c-k-c0x00ffffff-no-rj",

},


{
  id: 20,

  title: "Arabic Kuthu - Video Song | Beast | Thalapathy Vijay | Pooja Hegde",

  thumbnailUrl: "https://img.youtube.com/vi/KUN5Uf9mObQ/maxresdefault.jpg",

  likes: 306000,

  views: 50600000,

  channelName: "Sun TV",

  channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbonI2fEFXVxJYtWEqHjyY2k_i0N9a8CXyYo3lDiA=s48-c-k-c0x00ffffff-no-rj",

},


{
  id: 21,

  title: "Eyy Bidda Idhi Naa Adda Full Video Song |Pushpa Songs ",

  thumbnailUrl: "https://img.youtube.com/vi/jGetqo_SC9U/maxresdefault.jpg",

  likes: 570000,

  views: 9845000,

  channelName: "Aditya Music India",

  channelLogoUrl: "https://yt3.ggpht.com/FA98Wt-W9Dnxd7YFMvUqjMI5SWGN5Ex4K2nm8pCyljcCY6bLTVZ-RiUo23CUTTUoBAiK9dlrIA=s48-c-k-c0x00ffffff-no-rj",

}
]


function App() {
  return (
    <div id="video-card-wrapper">
     
      {videos.map((video, i) => {
        return <div class="video-card">
          <img class="thumbnail" src={video.thumbnailUrl}
            alt=""></img>
          <div class="logo-title-wrapper">
            <img src={video.channelLogoUrl}
              alt="" />
            <p class="video-title">{video.title}</p>
          </div>
          <div class="channel-likes-wrapper">
            <p className='channel-name'>{video.channelName}</p>
            <p>{video.views / 100000}M views <span>{video.likes / 1000}k likes</span></p>
          </div>



        </div>

      })}
    </div>
  );
}

export default App;
