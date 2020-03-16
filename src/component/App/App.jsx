import React from 'react';
import { PianoKeyboard } from '../Piano/PianoKeyboard';
import { GuitarNeck } from '../Guitar/GuitarNeck';
import { GuitarTuner } from '../../container/GuitarTuner';
import { BassTuner } from '../../container/BassTuner';
import {BASS_TUNING, BASS_TUNING_5_STRING, GUITAR_TUNING, GUITAR_TUNING_7_STRING, GUITAR_TUNING_8_STRING} from '../../store/reducer';
import './App.less';

export function App(
    {
        playSound,
        setPlaySound,
        guitarTuning, bassTuning, setBaseBassTuning, setBassTuning, setBaseGuitarTuning, setGuitarTuning }) {
    // <div><Piano range='C2-B5' /></div>
    // <div><Piano range='C2-C7'/></div> 61 key synth
    // <div><Piano range='E2-E6'/></div> guitar range
    // <div><Piano range='C2-B6'/></div>
    return (
        <>
            <h2>Settings</h2>
            <p>
                <label>
                    <input
                        type='checkbox'
                        checked={playSound}
                        onChange={e => setPlaySound(e.target.checked)}
                    />
                    Play notes on click
                </label>
            </p>

            <h2>Piano</h2>
            <p>This 88-keys layout is used in piano and grand piano. Numbers at the top are octaves' numbers.</p>
            <div>
                <PianoKeyboard range='A0-C8'/>
            </div>

            <h2>
                Acoustic/Electric Guitar&nbsp;
                <select onChange={e => {
                    setBaseGuitarTuning(e.target.value);
                    setGuitarTuning(e.target.value);
                }}>
                    <option value={GUITAR_TUNING}>6 strings</option>
                    <option value={GUITAR_TUNING_7_STRING}>7 strings</option>
                    <option value={GUITAR_TUNING_8_STRING}>8 strings</option>
                </select>
            </h2>
            <div>
                Tuning:&nbsp;<GuitarTuner/>
            </div>

            <p>
                Your guitar may have less than 24 frets but this doesn't affect the other notes.
                Click the nut to highlight a note of the corresponding open string.
            </p>

            <div>
                <GuitarNeck strings={guitarTuning}/>
            </div>

            <h2>
                Bass Guitar&nbsp;
                <select onChange={e => {
                    setBaseBassTuning(e.target.value);
                    setBassTuning(e.target.value);
                }}>
                    <option value={BASS_TUNING}>4 strings</option>
                    <option value={BASS_TUNING_5_STRING}>5 strings</option>
                </select>
            </h2>
            <div>
                Tuning:&nbsp;<BassTuner/>
            </div>
            <p>
                Your bass may have less than 24 frets but this doesn't affect the other notes.
                Click the nut to highlight a note of the corresponding open string.
            </p>
            <div>
                <GuitarNeck strings={bassTuning}/>
            </div>
        </>
    );
}
