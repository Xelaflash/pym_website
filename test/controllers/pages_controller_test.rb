require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get profil" do
    get pages_profil_url
    assert_response :success
  end

  test "should get informations" do
    get pages_informations_url
    assert_response :success
  end

end
