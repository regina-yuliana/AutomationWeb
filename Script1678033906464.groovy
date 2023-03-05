import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

'OPEN BROWSER AND NAVIGATE TO WEB'
WebUI.openBrowser(GlobalVariable.URL, false)
WebUI.waitForPageLoad(10)

'INPUT USERNAME'
WebUI.setText(findTestObject('Object Repository/Login_Swag Labs/input_Swag Labs_user-name'), GlobalVariable.Username)
WebUI.waitForAlert(5)

'INPUT PASSWORD'
WebUI.setEncryptedText(findTestObject('Object Repository/Login_Swag Labs/input_Swag Labs_password'), GlobalVariable.Password, 5)
WebUI.waitForAlert(5)

WebUI.click(findTestObject('Object Repository/Login_Swag Labs/input_Swag Labs_login-button'), 5)

WebUI.click(findTestObject('Object Repository/Login_Swag Labs/div_Swag Labs'), 5)

WebUI.click(findTestObject('Object Repository/Login_Swag Labs/button_Open Menu'))
	result = WebUI.getText(findTestObject('Products'))

WebUI.closeBrowser()

