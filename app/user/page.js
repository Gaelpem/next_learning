import { storeFeedback } from "../../lib/feedback-db";


export default function UserFeedback(){
    async function saveFeed(formData){
        "use server"
        const feedback =  formData.get("feedback"); 
        storeFeedback(feedback)
    }
    return (
        <form action={saveFeed}>
  <p>
        <label htmlFor="feedback">Your feedback</label>
        <textarea id="feedback" name="feedback" rows={3} />
      </p>
      <p><button>Submit</button></p>
        </form>
    )
}