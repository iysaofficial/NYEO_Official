const NewsletterComp = () =>{
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter_wrapper">
                <h2 className="newsletter-h2">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="newsletter-p">Berlangganan ke daftar email kami dan dapatkan promosi eksklusif<br/> and exclusive deals. </p>
                <form className="newsletter-form" action="https://formspree.io/f/xoqgjrok" method="POST">
                    <input type="text" name="email" placeholder="Masukan Email Anda" className="newsletter-input"/>
                    <button type="submit">Langganan</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default NewsletterComp