int value1 = GetTagWord("YLJCXZ");
char* value2 = GetTagChar("PZ1");
void isEsqual(int value1, char* value2){
char szBuffer[50];
char sz[8];
int xRet;
sprintf(sz, "YLCM%d", value1);
if(strcmp(value2, GetTagChar(sz)) != 0){
sprintf(szBuffer, "入库品种和所选仓号品种不符,请确认后重新输入!");

 xRet = MessageBox(FindWindow("PDLRTisAliveandwaitsForYou", NULL), szBuffer, "确认窗口", MB_YESNO|MB_ICONQUESTION|MB_SYSTEMMODAL);
}}
