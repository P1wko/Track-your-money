"use client"

import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function Expenses() {
    const [showCreateForm, setShowCreateForm] = useState(false)

    const [title, setTitle] = useState("")
    const [date, setDate] = useState(new Date("2000-1-1"))
    const [isExpense, setIsExpense] = useState(false);

    const dummyData = [
        {
            id: 1,
            title: "First transaction",
            transactionDate: "01-02-2024",
            isExpense: true
        },
        {
            id: 2,
            title: "Second transaction",
            transactionDate: "04-03-2024",
            isExpense: false
        }
    ]

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            title,
            date,
            isExpense
        }

        console.log(formData);
    }

    const toggleCreateForm = () => setShowCreateForm(!showCreateForm);

    return (
        <div className="flex-1 p-8 bg-gray-100">
           {showCreateForm && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">Formularz</h2> 
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                Title
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Transaction Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                Transaction Date
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" value="2020-01-01" onChange={(e) => setDate(new Date(e.target.value))}/>
                            </div>

                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked={isExpense} onChange={(e) => setIsExpense(e.target.checked)}/>
                                    <span className="ml-2 text-gray-700">Expense</span>
                                </label>
                            </div>

                            <div className="flex justify-end">
                                <button type="button" onClick={toggleCreateForm} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700">
                                Cancel
                                </button>
                                <button type="submit" className="ml-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
                                Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Expenses List</h1>
                <button className="flex items-center bg-gray-800 rounded-md p-3 text-white shadow-lg hover:bg-gray-700" onClick={toggleCreateForm}>
                    <PlusCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                    Create New
                </button>
            </div>
            <div>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Transaction Date</th>
                        <th className="px-4 py-2 border">Type</th>
                    </tr>
                </thead>
                <tbody>
                {dummyData.map((expense) => (
                    <tr key={expense.id} className="bg-white border">
                    <td className="px-4 py-2 border">{expense.id}</td>
                    <td className="px-4 py-2 border">{expense.title}</td>
                    <td className="px-4 py-2 border">{expense.transactionDate}</td>
                    <td className="px-4 py-2 text-center flex justify-center">{expense.isExpense ? (<p className="bg-red-400 w-24 px-4 py-1">Expense</p>) : (<p className="bg-green-400 w-24 px-4 py-1">Income</p>)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}