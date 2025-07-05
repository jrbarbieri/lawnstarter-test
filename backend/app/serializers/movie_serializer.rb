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

  def self.single(response)
    return nil unless response["result"].is_a?(Hash)

    {
      title: response["result"].dig("properties", "title"),
      uid: response["result"]["uid"]
    }
  end
end
