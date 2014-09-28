json.array!(@problems) do |problem|
  json.extract! problem, :id, :description, :difficulty, :solution, :process, :book_isbn, :page, :exercise_number
  json.url problem_url(problem, format: :json)
end
