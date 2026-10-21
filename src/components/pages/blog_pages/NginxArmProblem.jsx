
function NginxARMProblem() {
  return (
    <>
      <div className='content-container blog-container'>
        <h1 className='about-text'>Nginx Compatibility Issue</h1>
        <p className='about-text'>
          This issue comes from Apple implementing ARM chips in their somewhat
          new Macbooks. This issue is especially critical for all web developers
          working with projects firstly set on x86 proseccors (such as me) and I think this
          small <strong>symlink</strong> is going to help you.
        </p>
        <h1 className='about-text'>Just put it in your zsh:</h1>
        <div className='code-container'>
          <div className='code-block'>
            {`ln -s /opt/homebrew/etc/nginx/nginx.conf /usr/local/etc/nginx/nginx.conf`}
          </div>
        </div>
        <div className='about-text'>
          Or just use
        </div>
        <div className="code-block">brew stow</div>
      </div>
    </>
  );
}

export default NginxARMProblem;
