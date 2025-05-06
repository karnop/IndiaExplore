import React, {useState, useRef, useEffect} from 'react';
import {Button} from "@heroui/button";
import {Divider} from "@heroui/react";

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface ChatWindowProps {
    userId: string;
}

function Chatbot({ userId }: ChatWindowProps) {
    const [history, setHistory] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const endRef = useRef<HTMLDivElement>(null);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMsg: Message = { role: 'user', content: input };
        setHistory(prev => [...prev, userMsg]);
        setLoading(true);

        try {
            // 2. Call the API
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, message: input, history })
            });

            // 3. Parse JSON (whether ok or not)
            const payload = await res.json();
            let assistantMsg: Message;

            if (!res.ok) {
                // non‑2xx: show error from server
                assistantMsg = {
                    role: 'assistant',
                    content: payload.error || `An unexpected error occurred (status ${res.status}).`
                };
            } else {
                // 2xx: show normal reply
                assistantMsg = {
                    role: 'assistant',
                    content: payload.reply || 'No reply received.'
                };
            }

            // 4. Add assistant's response (either error or normal)
            setHistory(prev => [...prev, assistantMsg]);
        } catch (networkErr: any) {
            // 5. Handle fetch/network errors
            setHistory(prev => [
                ...prev,
                { role: 'assistant', content: `Network error: ${networkErr.message}` }
            ]);
        } finally {
            setInput('');
            setLoading(false);
        }
    };

    useEffect(() => {

    }, [history]);

    return (
        <div className="flex flex-col h-[85vh] max-w-xl mx-auto p-4 border-2 border-slate-300 shadow-md rounded-xl">
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">Disclaimer</h1>
                <p className="text-xs text-justify">We do not collect or store any information about your chat. Moreover, this is an AI Chatbot and all advice given should not be taken as the sole reason for your decision. AI chatbots are bound to make mistakes and we encourage you to book a session with a real lawyer to further clear your doubts and seek consultation. </p>
                <Divider className={"text-slate-300 my-2"}/>
            </div>
            <div className="flex w-full h-full flex-col overflow-auto mb-4 ">
                {history.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`my-2 p-3 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-black self-end text-white' : 'bg-gray-100 self-start'}`}>
                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                ))}
                <div ref={endRef} />
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    className="flex-1 bg-slate-100 rounded-l-lg p-2 outline-none"
                    placeholder="What is bothering you today..."
                    disabled={loading}
                />
                <Button
                    onClick={sendMessage}
                    disabled={loading}
                    className="bg-black text-white px-4 rounded-r-lg disabled:opacity-50 hover:cursor-pointer hover:opacity-80">
                    {loading ? '...' : 'Send'}
                </Button>
            </div>
        </div>
    );
}

export default Chatbot;