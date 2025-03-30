
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSampleValue } from "../redux/sampleSlice";
import { updateContextValue } from "../redux/contextSlice";
import { useAppContext } from "../context/ContextProvider";
import { fetchData } from "../api/api";
import useCounterStore from "../zustandStore/useCounterStore";
import { counterAtom } from "../atoms/counterAtom";
import { useAtom } from "jotai";
import { recoilCounterAtom } from "../recoil/atoms/recoilCounterAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { doubleCounterSelector } from "../recoil/selectors/counterSelector";

const Home = () => {
    const sampleValue = useSelector(state => state.sample.value);
    const contextReduxValue = useSelector(state => state.context.value);
    const dispatch = useDispatch();

    const [countJotai, setCountJotai] = useAtom(counterAtom);

    const [recoilCount, setRecoilCount] = useRecoilState(recoilCounterAtom);
    const doubleCount = useRecoilValue(doubleCounterSelector);

    const { count, increase, decrease, reset } = useCounterStore();
    const { contextValue, setContextValue } = useAppContext();
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetchData().then(data => setApiData(data));
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>🏡 Home Component</h2>
            <div style={{display:"grid",justifyItems:"center",width:"100%"}}>
                {/* Redux Sample State */}
                <div style={{margin:"5px",border:"1px solid black",borderRadius:"8px",padding:"10px",width:"30%"}}>
                    <p><strong>Redux Sample Value:</strong> {sampleValue}</p>
                    <button onClick={() => dispatch(updateSampleValue("Updated Sample Redux!"))}>
                        Update Sample Redux
                    </button>
                </div>

                {/* Redux Context State */}
                <div style={{margin:"5px",border:"1px solid black",borderRadius:"8px",padding:"10px",width:"30%"}}>
                <p><strong>Redux Context Value:</strong> {contextReduxValue}</p>
                <button onClick={() => dispatch(updateContextValue("Updated Redux Context!"))}>
                    Update Redux Context
                </button>
                </div>

                {/* Context API */}
                <div style={{margin:"5px",border:"1px solid black",borderRadius:"8px",padding:"10px",width:"30%"}}>
                <p><strong>Context API Value:</strong> {contextValue}</p>
                <button onClick={() => setContextValue("Updated Context API!")}>
                    Update Context API
                </button>
                </div>

                {/*Zustand state management*/}
                <div style={{margin:"5px",border:"1px solid black",borderRadius:"8px",padding:"10px",width:"30%"}}>
                <p><strong>Zustand Value:</strong> {count}</p>
                <button onClick={increase}>Increase Zustand state</button>
                </div>

                {/*Jotai state management*/}
                <div style={{margin:"5px",border:"1px solid black",borderRadius:"8px",padding:"10px",width:"30%"}}>
                <p><strong>Jotai Value:</strong> {countJotai}</p>
                <button onClick={() => setCountJotai(countJotai + 1)}>Increase Jotai state</button>
                </div>

                {/*Recoil state management*/}
                <div style={{margin:"5px",border:"1px solid black",borderRadius:"8px",padding:"10px",width:"30%"}}>
                <p><strong>Recoil Value:</strong> {recoilCount}</p>
                <p><strong>Recoil Double Value(from selector):</strong>{doubleCount}</p>
                <button onClick={() => setRecoilCount(recoilCount + 1)}>Increase Recoil state</button>
                </div>

                {/* API Data */}
                <div style={{margin:"5px",border:"1px solid black",borderRadius:"8px",padding:"10px",width:"30%"}}>
                {apiData ? <p><strong>API Data:</strong> {apiData.title}</p> : <p>Loading API Data...</p>}
                </div>
            </div>
        </div>
    );
};

export default Home;
