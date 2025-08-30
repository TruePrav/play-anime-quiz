import { useState, useRef, useEffect } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  file: string;
}

const tracks: Track[] = [
  { id: '1', title: 'My Hero Academia - The Day', artist: 'Porno Graffitti', file: '/music/[animelab] My Hero Academia - Official Opening.mp3' },
  { id: '2', title: 'Demon Slayer - Gurenge', artist: 'LiSA', file: '/music/[animelab] Demon Slayer ∩╜£ OP ∩╜£ Gurenge by LiSA HD.mp3' },
  { id: '3', title: 'Attack on Titan - Shinzou wo Sasageyo', artist: 'Linked Horizon', file: '/music/[animelab] Attack on Titan Season 2 - Official Opening Song - Shinzou wo Sasageyo by Linked Horizon.mp3' },
  { id: '4', title: 'Jujutsu Kaisen - Kaikai Kitan', artist: 'Eve', file: '/music/[Crunchyroll] JUJUTSU KAISEN Opening ∩╜£ Kaikai Kitan by Eve.mp3' },
  { id: '5', title: 'Naruto - GO!!!', artist: 'FLOW', file: '/music/[Crunchyroll Deutschland] Naruto Opening 4 ∩╜£ GO!!! (HD).mp3' },
  { id: '6', title: 'One Punch Man - The Hero!!', artist: 'JAM Project', file: '/music/[animelab] One Punch Man - Official Opening - The Hero!! Set Fire to the Furious Fist.mp3' },
  { id: '7', title: 'Tokyo Ghoul - Unravel', artist: 'TK from Ling tosite sigure', file: '/music/[Crunchyroll] Tokyo Ghoul Opening ∩╜£ Unravel.mp3' },
  { id: '8', title: 'Hunter x Hunter - Departure!', artist: 'Galileo Galilei', file: '/music/[Crunchyroll] Hunter X Hunter Opening 1 ∩╜£ Departure!.mp3' },
  { id: '9', title: 'Black Clover - Black Catcher', artist: 'Vickeblanka', file: '/music/[Crunchyroll] Black Clover Opening 10 ∩╜£ Black Catcher.mp3' },
  { id: '10', title: 'Steins;Gate 0 - Fatima', artist: 'Kanako Itou', file: '/music/[Animes Nii-san] Steins;Gate 0 - op pt-br legendado.mp3' },
  { id: '11', title: 'Yamada and the Seven Witches Opening', artist: 'Various', file: '/music/[Anime Horizon] Yamada and the Seven Witches Opening.mp3' },
  { id: '12', title: 'Demon Slayer - Zankyosanka', artist: 'Aimer', file: '/music/[Aimer Official YouTube Ch] AimerπÇîZankyosankaπÇìMUSIC VIDEO∩╝êDemon Slayer∩╝ÜKimetsu no Yaiba Entertainment District Arc Theme Song∩╝ë.mp3' },
  { id: '13', title: 'Death Parade - Flyers', artist: 'BRADIO', file: '/music/[AD Anime] Death Parade OP Γº╕ Opening πâçπé╣πâ╗πâæπâ¼πâ╝πâëFlyers by BRADIO [HD 720p].mp3' },
  { id: '14', title: 'Renai Circulation', artist: 'Kana Hanazawa', file: '/music/[∩╝ènamirin] Renai CirculationπÇîµüïµä¢πé╡πâ╝πé¡πâÑπâ¼πâ╝πé╖πâºπâ│πÇìµ¡îπüúπüªπü┐πüƒπÇÉ∩╝èπü¬πü┐πéèπéôπÇæ.mp3' },
  { id: '15', title: 'MASHLE - Bling-Bang-Bang-Born', artist: 'Creepy Nuts', file: '/music/[πéóπâïπâùπâ¼πââπé»πé╣ πâüπâúπâ│πâìπâ½] TVπéóπâïπâíπÇîπâ₧πââπé╖πâÑπâ½-MASHLE-πÇìτ¼¼2µ£ƒπâÄπâ│πé»πâ¼πé╕πââπâêOPπâáπâ╝πâôπâ╝∩╜£Creepy NutsπÇîBling-Bang-Bang-BornπÇì#BBBBπâÇπâ│πé╣.mp3' },
  { id: '16', title: 'Sword Art Online - crossing field', artist: 'LiSA', file: '/music/[πéóπâïπâùπâ¼πââπé»πé╣ πâüπâúπâ│πâìπâ½] LiSAπÇîcrossing fieldπÇì∩╝ÅπÇîπé╜πâ╝πâëπéóπâ╝πâêπâ╗πé¬πâ│πâ⌐πéñπâ│πÇìτ¼¼1µ£ƒ1stπé»πâ╝πâ½ πâÄπâ│πé»πâ¼πé╕πââπâêOP.mp3' },
  { id: '17', title: 'Akame ga Kill - Skyreach', artist: 'Sora Amamiya', file: '/music/[Θ¢¿σ««σñ⌐σà¼σ╝ÅYouTubeπâüπâúπâ│πâìπâ½] Θ¢¿σ««σñ⌐ πÇÄSkyreachπÇÅ(2014) Music Video (YouTube EDIT ver.).mp3' },
  { id: '18', title: 'Parasyte - Let Me Hear', artist: 'Fear, and Loathing in Las Vegas', file: '/music/[zenigame0123] ∩╝╗PV∩╝╜Let Me HearΓº╕Fear, and Loathing in Las Vegas.mp3' },
  { id: '19', title: 'Best Anime Openings (2000-2024)', artist: 'Various Artists', file: '/music/[Your Anime ] Best Anime Openings (2000 - 2024) ∩╜£∩╜£ FULL SONGS.mp3' },
  { id: '20', title: 'Oshi no Ko - Idol', artist: 'YOASOBI', file: '/music/[TVπéóπâïπâíπÇÉµÄ¿πüùπü«σ¡ÉπÇæσà¼σ╝Åπâüπâúπâ│πâìπâ½] πÇÉµÄ¿πüùπü«σ¡ÉπÇæπâÄπâ│πé»πâ¼πé╕πââπâêπé¬πâ╝πâùπâïπâ│πé░∩╜£YOASOBIπÇîπéóπéñπâëπâ½πÇì.mp3' },
  { id: '21', title: 'BEASTARS Opening', artist: 'Various', file: '/music/[TOHO animation] TVπéóπâïπâíπÇîBEASTARSπÇìπâÄπâ│πé»πâ¼πé╕πââπâê OP.mp3' },
  { id: '22', title: 'Noragami Aragoto - Hey Kids!!', artist: 'THE ORAL CIGARETTES', file: '/music/[THE ORAL CIGARETTES] ∩╝£πâÄπâ⌐πé¼πâƒARAGOTO∩╝₧OPπâåπâ╝πâ₧  THE ORAL CIGARETTESπÇîτïéΣ╣▒ Hey Kids!!πÇìMusicVideo.mp3' },
  { id: '23', title: 'Hitohira No Hanabira', artist: 'Stereopony', file: '/music/[STEREOPONYVEVO] Stereopony - Hitohira No Hanabira.mp3' },
  { id: '24', title: 'Database', artist: 'MAN WITH A MISSION feat. TAKUMA', file: '/music/[Sony Music Japan] MAN WITH A MISSIONπÇÇπÇÄdatabase feat.TAKUMA(10-FEET)πÇÅ.mp3' },
  { id: '25', title: 'Inferno', artist: 'Mrs. GREEN APPLE', file: '/music/[Mrs. GREEN APPLE] Mrs. GREEN APPLE - πéñπâ│πâòπéºπâ½πâÄ∩╝êInferno∩╝ë.mp3' },
  { id: '26', title: 'Kimi no Na wa', artist: 'Minami', file: '/music/[Minami] τ╛Äµ│óπÇîπé½πâ»πé¡πâ▓πéóπâíπé»πÇìMV.mp3' },
  { id: '27', title: 'Kuusou Mesorogiwi', artist: 'Yousei Teikoku', file: '/music/[Lantis Global Channel] [Official Video] Yousei Teikoku - Kuusou Mesorogiwi - τ⌐║µâ│πâíπé╜πâ¡πé«πâ░ σªûτ▓╛σ╕¥σ£ï.mp3' },
  { id: '28', title: 'Silhouette', artist: 'KANA-BOON', file: '/music/[KANA-BOON Official YouTub] KANA-BOON - Silhouette.mp3' },
  { id: '29', title: 'History Maker', artist: 'DEAN FUJIOKA', file: '/music/[DEAN FUJIOKA] DEAN FUJIOKA - History Maker πÇ£HITM Ver.πÇ£ Music Video.mp3' },
  { id: '30', title: 'Soul Eater - Papermoon', artist: 'Tommy heavenly6', file: '/music/[Crunchyroll] Soul Eater Opening 2 ∩╜£ Papermoon.mp3' },
  { id: '31', title: 'Soul Eater - Resonance', artist: 'T.M. Revolution', file: '/music/[Crunchyroll] Soul Eater Opening ∩╜£ Resonance by T.M. Revolution.mp3' },
  { id: '32', title: 'Re:ZERO - Redo', artist: 'Konomi Suzuki', file: '/music/[Crunchyroll] Re∩╝ÜZERO - Starting Life in Another World Opening 1 ∩╜£ Redo.mp3' },
  { id: '33', title: 'Overlord - Clattanoia', artist: 'OxT', file: '/music/[Crunchyroll] Overlord Opening ∩╜£ Clattanoia by OxT.mp3' },
  { id: '34', title: 'Noragami - Goya wa Machiawase', artist: 'Hello Sleepwalkers', file: '/music/[Crunchyroll] Noragami Opening ∩╜£ Goya wa Machiawase.mp3' },
  { id: '35', title: 'No Game No Life - This Game', artist: 'Konomi Suzuki', file: '/music/[Crunchyroll] No Game No Life Opening ∩╜£ This Game by Konomi Suzuki.mp3' },
  { id: '36', title: 'Naruto Shippuden - Blue Bird', artist: 'Ikimono-gakari', file: '/music/[Crunchyroll] Naruto Shippuden Opening 3 ∩╜£ Blue Bird.mp3' },
  { id: '37', title: 'My Hero Academia - ODD FUTURE', artist: 'UVERworld', file: '/music/[Crunchyroll] My Hero Academia Season 3 Opening 1 ∩╜£ ODD FUTURE.mp3' },
  { id: '38', title: 'My Hero Academia - The Day', artist: 'Porno Graffitti', file: '/music/[Crunchyroll] My Hero Academia Opening 1 ∩╜£ The Day.mp3' },
  { id: '39', title: 'Mob Psycho 100 - 99', artist: 'Mob Choir', file: '/music/[Crunchyroll] Mob Psycho 100 Opening ∩╜£ 99.mp3' },
  { id: '40', title: 'KONOSUBA - Fantastic Dreamer', artist: 'Machico', file: '/music/[Crunchyroll] KONOSUBA -Gods blessing on this wonderful world! - Opening ∩╜£ Fantastic Dreamer.mp3' },
  { id: '41', title: 'DAN DA DAN - Otonoke', artist: 'Creepy Nuts', file: '/music/[Crunchyroll] DAN DA DAN Opening ∩╜£ Otonoke by Creepy Nuts.mp3' },
  { id: '42', title: 'Black Clover - Black Rover', artist: 'Vickeblanka', file: '/music/[Crunchyroll] Black Clover - Opening 3 ∩╜£ Black Rover.mp3' },
  { id: '43', title: 'Attack on Titan - Jiyuu no Tsubasa', artist: 'Linked Horizon', file: '/music/[Crunchyroll] Attack on Titan Opening 2 ∩╜£ Jiyuu no Tsubasa by Linked Horizon.mp3' },
  { id: '44', title: 'Akame ga Kill - Liar Mask', artist: 'Rika Mayama', file: '/music/[Crunchyroll] Akame ga Kill! Opening 2 ∩╜£ Liar Mask by Rika Mayama.mp3' },
  { id: '45', title: 'The Rising of the Shield Hero Opening', artist: 'Various', file: '/music/[Crunchyroll FR] The Rising of the Shield Hero - Opening 1 (HD).mp3' },
  { id: '46', title: 'DARLING in the FRANXX Opening', artist: 'Various', file: '/music/[Crunchyroll FR] DARLING in the FRANXX - Opening (HD).mp3' },
  { id: '47', title: 'Black Clover Openings 1-13', artist: 'Various Artists', file: '/music/[Crunchyroll FR] Black Clover Openings 1-13 (HD).mp3' },
  { id: '48', title: 'Naruto Shippuden - Sign', artist: 'Flow', file: '/music/[Crunchyroll Deutschland] Naruto Shippuden Opening 6 ∩╜£ Sign (HD).mp3' },
  { id: '49', title: 'Naruto Shippuden - Hotaru no Hikari', artist: 'Ikimono-gakari', file: '/music/[Crunchyroll Deutschland] Naruto Shippuden Opening 5 ∩╜£ Hotaru no Hikari (HD).mp3' },
  { id: '50', title: 'Naruto - R★O★C★K★S', artist: 'Hound Dog', file: '/music/[Crunchyroll Deutschland] Naruto Opening 1 ∩╜£ RΓÿàOΓÿàCΓÿàKΓÿàS (HD).mp3' },
  { id: '51', title: 'Haruka Kanata', artist: 'ASIAN KUNG-FU GENERATION', file: '/music/[ASIAN KUNG-FU GENERATION ] ASIAN KUNG-FU GENERATION - Haruka Kanata.mp3' },
  { id: '52', title: 'MASHLE Opening Theme', artist: 'Various', file: '/music/[Aniplex USA] MASHLE∩╝Ü MAGIC AND MUSCLES The Divine Visionary Candidate Exam Arc ∩╜£ OPENING THEME.mp3' },
  { id: '53', title: 'Kaguya-sama - Love Is War', artist: 'Various', file: '/music/[Aniplex USA] Kaguya-sama∩╝Ü Love Is War∩╝ƒ Opening Theme (Limited Time Only).mp3' }
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [volume, setVolume] = useState(0.5);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isQuizActive, setIsQuizActive] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to play a random track
  const playRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];
    setCurrentTrack(randomTrack);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Function to start a new random song and play it (for when quiz starts)
  const startNewRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];
    setCurrentTrack(randomTrack);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      // Auto-play the new random song
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  // Function to stop music (for when quiz ends)
  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  // Initialize with a random track but don't play
  useEffect(() => {
    playRandomTrack();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      // Auto-play random track instead of sequential
      playRandomTrack();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack.id]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Listen for new quiz events to start a new random song
  useEffect(() => {
    const handleNewQuiz = () => {
      setIsQuizActive(true);
      startNewRandomSong();
    };

    // Listen for custom event when new quiz starts
    window.addEventListener('new-quiz-started', handleNewQuiz);

    return () => {
      window.removeEventListener('new-quiz-started', handleNewQuiz);
    };
  }, []);

  // Listen for quiz end events to stop music
  useEffect(() => {
    const handleQuizEnd = () => {
      setIsQuizActive(false);
      stopMusic();
    };

    // Listen for custom event when quiz ends
    window.addEventListener('quiz-ended', handleQuizEnd);

    return () => {
      window.removeEventListener('quiz-ended', handleQuizEnd);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const changeTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Hide music player during quiz on mobile to avoid blocking content
  if (isQuizActive && window.innerWidth <= 768) {
    return (
      <>
        {/* Hidden Audio Element - Keep playing even when UI is hidden */}
        <audio
          ref={audioRef}
          src={currentTrack.file}
          preload="metadata"
        />
      </>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Compact Player Bar */}
      <div className={`bg-gray-900 border border-gray-600 rounded-lg shadow-2xl transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-72'
      }`}>
        {/* Compact Bar View */}
        {!isExpanded && (
          <div className="p-3">
            <div className="flex items-center justify-between">
              {/* Track Info */}
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🎵</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm truncate">{currentTrack.title}</div>
                  <div className="text-gray-400 text-xs truncate">{currentTrack.artist}</div>
                </div>
              </div>
              
              {/* Compact Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMute}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
                
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 flex-shrink-0"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                
                <button
                  onClick={() => {
                    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
                    const nextIndex = (currentIndex + 1) % tracks.length;
                    changeTrack(tracks[nextIndex]);
                  }}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  title="Next Track"
                >
                  ⏭️
                </button>
                
                {/* Expand Arrow */}
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-gray-400 hover:text-white transition-colors p-1 ml-2"
                  title="Expand Player"
                >
                  ▶️
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Expanded Full View */}
        {isExpanded && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Collapse Player"
              >
                ◀️
              </button>
            </div>

            {/* Current Track Info */}
            <div className="p-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🎵</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold truncate">{currentTrack.title}</div>
                  <div className="text-gray-400 text-sm truncate">{currentTrack.artist}</div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-3 pb-2">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Full Controls */}
            <div className="flex items-center justify-between p-3">
              <button
                onClick={() => {
                  const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
                  const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
                  changeTrack(tracks[prevIndex]);
                }}
                className="text-gray-400 hover:text-white transition-colors"
                title="Previous Track"
              >
                ⏮️
              </button>
              
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
              
              <button
                onClick={() => {
                  const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
                  const nextIndex = (currentIndex + 1) % tracks.length;
                  changeTrack(tracks[nextIndex]);
                }}
                className="text-gray-400 hover:text-white transition-colors"
                title="Next Track"
              >
                ⏭️
              </button>
            </div>

            {/* Shuffle Button */}
            <div className="px-3 pb-2">
              <button
                onClick={playRandomTrack}
                className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>🔀</span>
                <span>New Random Song</span>
              </button>
            </div>

            {/* Volume Control */}
            <div className="px-3 pb-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMute}
                  className="text-gray-400 hover:text-white transition-colors"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value);
                    setVolume(newVolume);
                    if (isMuted) {
                      setIsMuted(false);
                    }
                  }}
                  className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-gray-400 text-xs w-8">{Math.round((isMuted ? 0 : volume) * 100)}%</span>
              </div>
            </div>

            {/* Track List */}
            <div className="border-t border-gray-600 max-h-48 overflow-y-auto">
              <div className="p-2 text-xs text-gray-400 font-semibold">TRACKS</div>
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => changeTrack(track)}
                  className={`w-full text-left p-2 text-sm hover:bg-gray-800 transition-colors ${
                    currentTrack.id === track.id ? 'bg-orange-600 text-white' : 'text-gray-300'
                  }`}
                >
                  <div className="truncate">{track.title}</div>
                  <div className="text-xs text-gray-400 truncate">{track.artist}</div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.file}
        preload="metadata"
      />
    </div>
  );
};

export default MusicPlayer;
