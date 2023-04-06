// Must be class components
import Document, { Html, Head, Main, NextScript } from "next/document";

// This is the default structure
class MyDocument extends Document {
    // render() {
    //     <Html>
    //         <Head/>
    //         <body>
    //             <Main/>
    //             <NextScript/>
    //         </body>
    //     </Html>
    // }

    // if I Override the above default structure
    render() {
        return (<Html lang='en'>
            <Head/>
                <body>
                    {/* This allows to use with react portals */}
                    <div id="overlays"></div>
                    <Main/>
                    <NextScript/>
                </body>
        </Html>
        );    
    }
}

export default MyDocument;