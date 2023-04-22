import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {addWord, getWords} from "../../services/wordService";
import {useNavigate} from "react-router-dom";

type FormValues = {
    word: string;
}

interface WordsResponse {
    id: number;
    word: string
}

function Admin() {
    const navigate = useNavigate();
    const [words, setWords] = useState<WordsResponse[] | null>(null);
    const [includeWordError, setIncludeWordError] = useState(false);
    const fetchData = () => {
        getWords().then(res => setWords(res.data))
    }
    useEffect(() => {
        fetchData()
    }, [])

    const {
        register, handleSubmit, watch, formState: {errors}
    }
        = useForm<FormValues>({mode: 'onTouched'});
    const {word} = watch();

    const onSubmit: SubmitHandler<FormValues> = data => {
        addWord(data).then(res => {
            fetchData()
        })
    };
    useEffect(() => {
        if (word && words?.find(e => e.word === word)) {
            setIncludeWordError(true)
        } else {
            setIncludeWordError(false)
        }
    }, [word, words]);
    return (
        <div className='flex flex-col h-[70%] bg-white scrollbar-thin w-[70%] p-16'>
            <h1 className='first-letter:capitalize text-3xl font-semibold text-[#6A6866] text-center mb-10'>Admin</h1>
            <div className='flex flex-row relative min-h-0  flex -mx-4 sm:-mx-6 md:mx-0'>
                <div className='w-2/5 flex flex-col items-center  max-h-[70%] justify-between'>
                    <span>Type the word you want to add to the list</span>
                    <form className='flex flex-col w-full items-center' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" id="new_word"
                               className="bg-white shadow mt-2 mb-2 text-gray-900 text-sm rounded  focus:outline-[#00ADEE] border focus:border border-[#243c5a] block w-1/2 p-2.5   "
                               placeholder="New word" {...register('word', {
                            required: 'this is required field',
                            pattern: {
                                value: /[a-z]/,
                                message:
                                    "Only lower case (a-z)"
                            },
                            maxLength: {value: 14, message: 'Maximum length 14'},
                            minLength: {value: 6, message: 'Minimum length 6'},
                        })} required/>

                        {includeWordError && (<div
                            className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
                            role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Info</span>
                            <span className="font-medium">this word has been added</span>
                        </div>)}
                        {errors.word?.message && (<div
                            className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
                            role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Info</span>
                            <span className="font-medium">{errors.word?.message}</span>
                        </div>)}
                        <input className='letsPlay rounded w-1/2 disabled:bg-gray-400' disabled={includeWordError|| errors.word?.message!=null} type="submit"/>
                        <button
                                className='w-1/2 rounded mt-2 mb-2 border border-[#00ADEE] p-2.5 text-[#00ADEE] '
                                onClick={() => navigate(-1)}>back
                        </button>
                    </form>
                </div>
                <div
                    className='flex flex-col w-3/5 scrollbar-thin p-6 scrollbar-thumb-[#00ADEE] scrollbar-track-gray-100 overflow-x-auto'>
                    <div className='grid grid-cols-4 gap-4'>
                        {words && words.map(({word, id}) => <span key={id}>{word}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
