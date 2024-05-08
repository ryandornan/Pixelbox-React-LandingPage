function TestimonialBlock({ company, stat, statText, quote }) {
    return (
        <div className="testimonial-block">
            <p>{company}</p>
            <h3>{stat}</h3>
            <h4>{statText}</h4>
            <p className="testimonial-block-text">{quote}</p>
        </div>
    );
}

export default TestimonialBlock;
