const AboutComp = () => {
    return(
        <>
        <section className="about-section" id="about-section">
        <div className="about-content">
            <div className="about-text">
                <h1>NYEO</h1>
                <h5>National Youth Economy Olympiad</h5>
                <p>Olimpiade ini merupakan sebuah kompetisi yang diselenggarakan
untuk menguji kemampuan dan pengetahuan para pelajar di
bidang Ekonomi. Ajang ini dirancang
untuk mendorong para pelajar agar lebih mendalami ilmu
Ekonomi.</p>
                <p>Olimpiade Ekonomi ini diikuti oleh para pelajar dari
tingkat SMA. Para peserta akan
diuji dengan berbagai soal yang berkaitan dengan konsep-konsep
dasar Ekonomi dalam kehidupan sehari-
hari.</p>
                {/* <a href="/AboutPage"><button className="about-btn">Read More</button></a> */}
            </div>
            <img src="/assets/images/logo/NYEO.png" alt="" />
        </div>
    </section>
        </>
    )
}

export default AboutComp