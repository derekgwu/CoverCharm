import axios from 'axios'

function parseRegexInstance(letter){
  const regex = /\/<.*?>\//g; 
  const matches = letter.match(regex);
  return new Set(matches)
}

const CREATE_LETTER_TEMPLETE_API = process.env.NEXT_PUBLIC_SERVER_URL + "/postletters";
const GET_LETTERS_API = process.env.NEXT_PUBLIC_SERVER_URL + "/api/getletters";
const GET_LETTER_CONTENT_API = process.env.NEXT_PUBLIC_SERVER_URL + "/api/get_letter_content";
const GET_LETTER_REGEX_API = process.env.NEXT_PUBLIC_SERVER_URL + "/api/get_letter_regex";
const DELETE_LETTER_API = process.env.NEXT_PUBLIC_SERVER_URL + "/api/delete_letter"
const UPDATE_LETTER_API = process.env.NEXT_PUBLIC_SERVER_URL + "/api/update_letter"

class LetterTemplateService{
    async getLetterRegex(id){
        const response = await axios.get(GET_LETTER_REGEX_API, {
            params : {id : id}
        })
        console.log(response.data)
        let ret = response.data
        return ret
    }
    
    async getLetters(user_id){
        const response = await axios.get(GET_LETTERS_API, {
            params: { email: user_id },
        });
        console.log(response.data)
        let ret = response.data
        return ret
    }

    async getLetterContent(id){
        const response = await axios.get(GET_LETTER_CONTENT_API, {
            params : {id: id}
        });
        let ret = response.data[0]
        return ret;
    }
    createLetterTemplate(user_id, letter, letterName){
        let matches = parseRegexInstance(letter)
        const response = axios.post(CREATE_LETTER_TEMPLETE_API, 
        {
            user_id: user_id,
            letter: letter,
            regex : Array.from(matches),
            name : letterName
        },  
        );
        
    }

    updateLetterTemplate(user_id, letter, letterName, id){
        let matches = parseRegexInstance(letter)
        const response = axios.post(UPDATE_LETTER_API, 
            {
                user_id: user_id,
                letter: letter,
                regex : Array.from(matches),
                name : letterName,
                id: id
            },  
        );


    }

    async deleteLetter(id){
        const response = axios.get(DELETE_LETTER_API, {
            params : {id:id}
        })
        return 1;
    }
}

export default new LetterTemplateService();