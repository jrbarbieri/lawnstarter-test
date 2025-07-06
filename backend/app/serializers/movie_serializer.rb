class MovieSerializer
  def self.collection(response)
    return [] unless response["result"].is_a?(Array)

    response["result"].map do |movie|
      {
        title: movie.dig("properties", "title"),
        uid: movie["uid"]
      }
    end
  end
end
