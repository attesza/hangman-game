import React, {useEffect, useState} from 'react';
import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {addWord, getWords} from "../../services/wordService";


type formValues = {
    word: string;
}

const resolver: Resolver<formValues> = async (values) => {
    return {
        values: values.word ? values : {},
        errors: !values.word ? {
            word: {type: 'required', message: "Required field"},
        } : {},
    }
}

interface WordsResponse {
    id: number;
    word: string
}

function Admin() {
    const [words, setWords] = useState<WordsResponse[] | null>(null);
    const fetchData = () => {
        getWords().then(res => setWords(res.data))
    }
    useEffect(() => {
        fetchData()
    }, [])

    const {register, handleSubmit, setError, formState: {errors}} = useForm<formValues>({resolver});
    const onSubmit: SubmitHandler<formValues> = data => {
        // if (!data.word) {
        //     setError("word")
        // }
        // if (data.word.length < 6) {
        //     setError("minimum 6 character", {type: "min"})
        // }
        // if (data.word.length > 12) {
        //     setError("maximum 12 character", {type: "max"})
        // }
        // if (words?.some(element => element.word === "data.word")) {
        //     setError("This word has been added", {type: "validate"})
        // }
        addWord(data).then(res => {
            console.log(res.data);
            fetchData()
        })
    };


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
                            maxLength: {value: 12, message: 'Maximum length 12'},
                            minLength: {value: 6, message: 'minimum length 12'},
                        })} required/>
                        {errors && (
                            <p>{errors.word?.message}</p>)}
                        <input className='letsPlay rounded w-1/2' type="submit"/>
                        <button className='w-1/2 rounded mt-2 mb-2 border border-[#00ADEE] p-2.5 text-[#00ADEE]'>back
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
