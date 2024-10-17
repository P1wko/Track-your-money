import { PlusCircleIcon } from "@heroicons/react/24/outline"

export default function Expenses() {
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

    return (
        <div className="flex-1 p-8 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Expenses List</h1>
                <button className="flex items-center bg-gray-800 rounded-md p-3 text-white shadow-lg hover:bg-gray-700">
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
                        <th className="px-4 py-2 border">Date</th>
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