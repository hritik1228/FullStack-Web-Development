import fs from 'fs';
import path from 'path';


export function buildFeedbackPath() {
    return path.join(process.cwd(), 'data', 'feedback.json')
}

export function extractFeedback(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req, res) {
    // By Default all kind of request will trriger this function
    if (req.method === 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;
        const newFeedabck = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText
        }

        console.log('Logging from ', newFeedabck)

        // Store that in a database or in a file
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);
        // Read the file first, Fetch the data in the file, Override in the file with the updated data

        data.push(newFeedabck);
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({ message: 'Success', feedback: newFeedabck })
    } else {

        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath)
        res.status(200).json({ feedback: data })
    }
}

export default handler