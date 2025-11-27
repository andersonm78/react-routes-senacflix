import './VideoModal.css';

function VideoModal({ videoId, onClose }) {
  if (!videoId) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <button className="close-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default VideoModal;