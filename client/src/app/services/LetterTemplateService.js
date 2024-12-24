import axios from 'axios'

function parseRegexInstance(letter){
  const regex = /\/<.*?>\//g; 
  const matches = letter.match(regex);
  return new Set(matches)
}

const CREATE_LETTER_TEMPLETE_API = process.env.NEXT_PUBLIC_SERVER_URL + "/postletters";
const GET_LETTERS_API = process.env.NEXT_PUBLIC_SERVER_URL + "/api/getletters";

class LetterTemplateService{
    getLetters(user_id){
        console.log(GET_LETTERS_API)
        const response = axios.get(GET_LETTERS_API, 
            {
                params: { email: user_id }, 
            }).then((response) =>{
                console.log(response.data)
            })
    }
    createLetterTemplate(user_id, letter, letterName){
        let matches = parseRegexInstance(letter)
        console.log(matches)
        const response = axios.post('http://127.0.0.1:8000/postletters', 
        {
            user_id: user_id,
            letter: letter,
            regex : Array.from(matches),
            name : letterName
        },  
);
        console.log('Response:', response.data);
        
    }
}

export default new LetterTemplateService();