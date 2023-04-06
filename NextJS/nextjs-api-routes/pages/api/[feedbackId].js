import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {

    // if(req.method==='POST'){

    // }

    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const feedbackData = extractFeedback(filePath);
    const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId)
    res.status(200).json({ feedback: selectedFeedback })

}

export default handler;


// We can also have file name as [...fileName].js-It is for to catch all dynamic API Routes
// Ex. /api/some-values/some-more-values/1/2
// Next JS does the API file priortization