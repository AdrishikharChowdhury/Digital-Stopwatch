import React,{ useEffect,useState,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faBookmark, faArrowRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import Intervals from './Intervals';
import Button from './Button';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const [intervals, setIntervals] = useState([])

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)
            },10)
        }
        
        return ()=>{
            clearInterval(intervalIdRef.current)
        }
    },[isRunning]);

    const start=()=>{
        setIsRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
    }

    const stop=()=>{
        setIsRunning(false);
    }

    const reset=()=>{
        setIsRunning(false);
        setElapsedTime(0);
        setIntervals([]);
    }

    const formatTime=(time=elapsedTime)=>{
        let hours=Math.floor(time/(1000*60*60));
        let minutes=Math.floor(time/(1000*60)%60);
        let seconds=Math.floor(time/(1000)%60);
        let mseconds=Math.floor((time%1000)/10);

        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        mseconds=String(mseconds).padStart(2,"0");

        return `${hours}:${minutes}:${seconds}:${mseconds}`
    }

    const recordIntervals=()=>{
        setIntervals(i=>[...i,elapsedTime]);
    }

    const deleteInterval=(idx)=>{
        const newIntervals=intervals.filter((elem,index)=>index!==idx)
        setIntervals(newIntervals);
    }

  return (
    <div className='z-20 text-white border-2 sm:py-6 py-4 sm:px-8 px-4 flex flex-col justify-center items-center gap-10 rounded-2xl shadow-2xl drop-shadow-[0_0_0.9rem_rgba(25,208,29,0.9)]'>
        <div className="sm:text-4xl text-2xl">{formatTime()}</div>
        <div className="sm:text-2xl text-lg flex justify-center sm:gap-6 gap-4 items-center w-full">
            <Button onClick={start} icon={faPlay} color={`bg-green-600`} />
            <Button onClick={stop} icon={faStop} color={`bg-red-600`} />
            <Button onClick={recordIntervals} icon={faBookmark} color={`bg-yellow-500`} />
            <Button onClick={reset} icon={faArrowRotateLeft} color={`bg-blue-600`} />
        </div>
        <Intervals intervals={intervals} formatTime={formatTime} deleteInterval={deleteInterval}/>
    </div>
  )
}

export default Stopwatch