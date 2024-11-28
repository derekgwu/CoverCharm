import axios from 'axios'


class LetterTemplateService{
    createLetterTemplate(user_id, letter){
        console.log(letter);
        const response = axios.post('http://127.0.0.1:8000/postletters', {
            user_id: user_id,
            letter: letter,
        });
        console.log('Response:', response.data);
        
    }
}

export default new LetterTemplateService();