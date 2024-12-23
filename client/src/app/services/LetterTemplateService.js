import axios from 'axios'
function parseRegexInstance(letter){
  const regex = /\/<.*?>\//g; 
  const matches = letter.match(regex);
  return new Set(matches)
}

class LetterTemplateService{
   
    createLetterTemplate(user_id, letter){
        let matches = parseRegexInstance(letter)
        console.log(matches)
        const response = axios.post('http://127.0.0.1:8000/postletters', 
        {
            user_id: user_id,
            letter: letter,
            regex : Array.from(matches)
        },  
);
        console.log('Response:', response.data);
        
    }
}

export default new LetterTemplateService();