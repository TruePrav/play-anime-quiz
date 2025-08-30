import { useState, useRef, useEffect } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  file: string;
}

const tracks: Track[] = [
  { id: '1', title: 'My Hero Academia - The Day', artist: 'Porno Graffitti', file: '/music/[Crunchyroll] My Hero Academia Opening 1 ∩╜£ The Day.mp3' },
  { id: '2', title: 'Demon Slayer - Gurenge', artist: 'LiSA', file: '/music/[animelab] Demon Slayer ∩╜£ OP ∩╜£ Gurenge by LiSA HD.mp3' },
  { id: '3', title: 'Attack on Titan - Shinzou wo Sasageyo', artist: 'Linked Horizon', file: '/music/[animelab] Attack on Titan Season 2 - Official Opening Song - Shinzou wo Sasageyo by Linked Horizon.mp3' },
  { id: '4', title: 'Jujutsu Kaisen - Kaikai Kitan', artist: 'Eve', file: '/music/[Crunchyroll] JUJUTSU KAISEN Opening ∩╜£ Kaikai Kitan by Eve.mp3' },
  { id: '5', title: 'One Piece - We Are!', artist: 'Hiroshi Kitadani', file: '/music/[Crunchyroll] One Piece Opening 1 ∩╜£ We Are!.mp3' },
  { id: '6', title: 'Naruto - GO!!!', artist: 'FLOW', file: '/music/[Crunchyroll Deutschland] Naruto Opening 1 ∩╜£ GO!!! (HD).mp3' },
  { id: '7', title: 'Tokyo Ghoul - Unravel', artist: 'TK from Ling tosite sigure', file: '/music/[Crunchyroll] Tokyo Ghoul Opening ∩╜£ Unravel.mp3' },
  { id: '8', title: 'Death Note - The World', artist: 'Nightmare', file: '/music/[AD Anime] Death Parade OP Γº╕ Opening πâçπé╣πâ╗πâæπâ¼πâ╝πâëFlyers by BRADIO [HD 720p].mp3' },
  { id: '9', title: 'Hunter x Hunter - Departure!', artist: 'Galileo Galilei', file: '/music/[Crunchyroll] Hunter X Hunter Opening 1 ∩╜£ Departure!.mp3' },
  { id: '10', title: 'Black Clover - Black Catcher', artist: 'Vickeblanka', file: '/music/[Crunchyroll] Black Clover Opening 10 ∩╜£ Black Catcher.mp3' }
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [volume, setVolume] = useState(0.5);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      // Auto-play next track
      const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
      const nextIndex = (currentIndex + 1) % tracks.length;
      setCurrentTrack(tracks[nextIndex]);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.file}
        preload="metadata"
      />
      
      {/* Mini Player */}
      <div className={`bg-gray-900 border border-gray-600 rounded-lg shadow-2xl transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-64'
      }`}>
        {/* Player Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🎵</span>
            </div>
            <span className="text-white font-semibold text-sm">Anime Music</span>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? '−' : '+'}
          </button>
        </div>

        {/* Track Info */}
        <div className="p-3">
          <div className="text-white font-medium text-sm truncate">{currentTrack.title}</div>
          <div className="text-gray-400 text-xs truncate">{currentTrack.artist}</div>
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
            style={{
              background: `linear-gradient(to right, #f97316 ${(currentTime / (duration || 1)) * 100}%, #374151 ${(currentTime / (duration || 1)) * 100}%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between p-3">
          <button
            onClick={() => {
              const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
              const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
              changeTrack(tracks[prevIndex]);
            }}
            className="text-gray-400 hover:text-white transition-colors p-2"
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
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            ⏭️
          </button>
        </div>

        {/* Volume Control */}
        <div className="px-3 pb-3">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #f97316 ${volume * 100}%, #374151 ${volume * 100}%)`
              }}
            />
            <span className="text-gray-400 text-xs w-8">{Math.round(volume * 100)}%</span>
          </div>
        </div>

        {/* Track List (when expanded) */}
        {isExpanded && (
          <div className="border-t border-gray-600 max-h-48 overflow-y-auto">
            <div className="p-2 text-xs text-gray-400 font-medium">Playlist</div>
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => changeTrack(track)}
                className={`w-full text-left p-2 text-xs hover:bg-gray-800 transition-colors ${
                  currentTrack.id === track.id ? 'bg-orange-600 text-white' : 'text-gray-300'
                }`}
              >
                <div className="truncate">{track.title}</div>
                <div className="text-gray-500 truncate">{track.artist}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
