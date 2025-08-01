import "./review.css";
import { useState } from "react";

export default function Review() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const data = JSON.parse(localStorage.getItem("Data"));
  const reviews = data.reviews;

  const handleSubmit = (e) => {
    e.preventDefault();
    const lastRew = reviews[reviews.length - 1];
    const newId = Number(lastRew.id) + 1;

    const newReview = {
      id: newId,
      name,
      title,
      comment,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "Data",
      JSON.stringify({
        ...data,
        reviews: [...reviews, newReview],
      })
    );

    setName("");
    setTitle("");
    setComment("");
    setIsModalOpen(false);
  };

  return (
    <div className="review">
      <div className="review-head">
        <h2 className="review-header">Customer Reviews</h2>
        <button className="add-review-btn" onClick={() => setIsModalOpen(true)}>
          Add Your Review
        </button>
      </div>

      {reviews.map((review) => (
        <div className="review-item" key={review.id}>
          <div className="review_name">{review.name}</div>
          <div className="review-view">
            <div className="review-qn">{review.title}</div>
            <div className="review-date">{review.date}</div>
          </div>
          <div className="review-ans">{review.comment}</div>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Your Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Review Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Review</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit">Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
