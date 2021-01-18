function Home() {
    const githubUrl = `http://github.com/devdohyun/react-practice`
    
    return (<div className="page-container">
        안녕하세요. 리액트를 연습하고자 만든 프로젝트입니다. <br/>
        모든 소스는 <a href={githubUrl} target="_blank">Github</a>에 업로드되어 있습니다. <br/>
        감사합니다.
    </div>)
}

export default Home