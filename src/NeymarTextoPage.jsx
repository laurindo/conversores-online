import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

class NeymarTextoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt10: ""
        };
    }

    componentDidMount() {
        const self = this;
        new window.Jscii({
            width: 85,
            color: true,
            el: document.getElementById('jscii-element-image'),
            fn: function(str) {
                self.setState({txt1: str});
                document.getElementById('ascii-container-image').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 85,
            color: true,
            el: document.getElementById('jscii-element-image2'),
            fn: function(str) {
                self.setState({txt2: str});
                document.getElementById('ascii-container-image2').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image3'),
            fn: function(str) {
                self.setState({txt3: str});
                document.getElementById('ascii-container-image3').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image4'),
            fn: function(str) {
                self.setState({txt4: str});
                document.getElementById('ascii-container-image4').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image5'),
            fn: function(str) {
                self.setState({txt5: str});
                document.getElementById('ascii-container-image5').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image6'),
            fn: function(str) {
                self.setState({txt6: str});
                document.getElementById('ascii-container-image6').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image7'),
            fn: function(str) {
                self.setState({txt7: str});
                document.getElementById('ascii-container-image7').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image8'),
            fn: function(str) {
                self.setState({txt8: str});
                document.getElementById('ascii-container-image8').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image9'),
            fn: function(str) {
                self.setState({txt9: str});
                document.getElementById('ascii-container-image9').innerHTML = str;
            }
        });

        new window.Jscii({
            width: 75,
            color: true,
            el: document.getElementById('jscii-element-image10'),
            fn: function(str) {
                self.setState({txt10: str});
                document.getElementById('ascii-container-image10').innerHTML = str;
            }
        });
    }

    convert = () => {
        this.setState({total: this.state.text.length});
    };

    render() {
        return (
            <div className="grid five-column">
                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/c_crop,w_226/v1598109384/neymar2_anhhnq.png"
                    />
                    <pre id="ascii-container-image" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt1} onCopy={() => this.setState({copiedTxt1: true}, () => setTimeout(() => this.setState({copiedTxt1: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt1 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image2"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598108764/neymar-topete_yquxwb.webp"
                    />
                    <pre id="ascii-container-image2" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt2} onCopy={() => this.setState({copiedTxt2: true}, () => setTimeout(() => this.setState({copiedTxt2: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt2 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image3"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144242/n2_ybbxtn.jpg"
                    />
                    <pre id="ascii-container-image3" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt3} onCopy={() => this.setState({copiedTxt3: true}, () => setTimeout(() => this.setState({copiedTxt3: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt3 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image4"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144243/n5_inz4ki.jpg"
                    />
                    <pre id="ascii-container-image4" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt4} onCopy={() => this.setState({copiedTxt4: true}, () => setTimeout(() => this.setState({copiedTxt4: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt4 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image5"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144243/n6_zobteg.jpg"
                    />
                    <pre id="ascii-container-image5" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt5} onCopy={() => this.setState({copiedTxt5: true}, () => setTimeout(() => this.setState({copiedTxt5: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt5 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image6"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144242/n3_fnkiye.jpg"
                    />
                    <pre id="ascii-container-image6" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt6} onCopy={() => this.setState({copiedTxt6: true}, () => setTimeout(() => this.setState({copiedTxt6: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt6 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image7"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144242/n7_ica8i8.webp"
                    />
                    <pre id="ascii-container-image7" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt7} onCopy={() => this.setState({copiedTxt7: true}, () => setTimeout(() => this.setState({copiedTxt7: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt7 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image8"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144838/n9_c4cspm.jpg"
                    />
                    <pre id="ascii-container-image8" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt8} onCopy={() => this.setState({copiedTxt8: true}, () => setTimeout(() => this.setState({copiedTxt8: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt8 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image9"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144838/n8_w0lsxy.jpg"
                    />
                    <pre id="ascii-container-image9" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt9} onCopy={() => this.setState({copiedTxt9: true}, () => setTimeout(() => this.setState({copiedTxt9: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt9 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>

                <div class="section clearfix">
                    <img 
                        width="150"
                        id="jscii-element-image10"
                        crossOrigin="anonymous"
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1598144838/n7_mmqcch.jpg"
                    />
                    <pre id="ascii-container-image10" className="asc-image"></pre>
                    <CopyToClipboard text={this.state.txt10} onCopy={() => this.setState({copiedTxt10: true}, () => setTimeout(() => this.setState({copiedTxt10: false}), 3000))}>
                        <div>
                            <button>copiar</button>
                            {this.state.copiedTxt10 && <span style={{color: "green"}}>copiado!!!!</span>}
                        </div>
                    </CopyToClipboard>
                </div>
            </div>
        );
    }
}

export default NeymarTextoPage;