class PeopleSerializer
  def self.collection(response)
    return [] unless response["result"].is_a?(Array)

    response["result"].map do |person|
      {
        name: person.dig("properties", "name"),
        uid: person["uid"]
      }
    end
  end
end
