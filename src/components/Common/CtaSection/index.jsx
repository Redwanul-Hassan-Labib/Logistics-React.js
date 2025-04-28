import React from 'react';

const CtaSection = (props) => {
	const { title, text, shapeImageUrl, breadcrumbsImg, phoneNumber, className  } = props;
	
	const breadcrumbsImgStyle = {
		backgroundImage: `url(${breadcrumbsImg})`
	}
	
	return (
	<>
	
		{/*CTA One Start*/}
		<section className={className || "cta-one"}>
			<div className="container">
			<div className="cta-one__inner">
				<div
				className="cta-one__bg-img"
					style={breadcrumbsImgStyle}></div>
				<div className="cta-one__content-box">
				<div className="cta-one__icon">
					<span className="icon-call" />
					<div className="cta-one__shape-1">
						<img src={shapeImageUrl} alt="" />
					</div>
				</div>
				<h3 className="cta-one__title">{title}</h3>
				<div className="cta-one__contact-box">
					<div className="icon">
					<span className="icon-phone" />
					</div>
					<div className="content">
					<p>{text}</p>
					<h3>
						<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
					</h3>
					</div>
				</div>
				</div>
			</div>
			</div>
		</section>
		{/*CTA One End*/}
	</>
	);
}

export default CtaSection;




