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

  def self.single(response)
    return nil unless response["result"].is_a?(Hash)

    {
      name: response["result"].dig("properties", "name"),
      uid: response["result"]["uid"]
    }
  end
end
