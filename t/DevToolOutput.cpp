char *__cdecl sub_9D5670(char a1, char a2, signed int a3, int a4, char a5)
{
  int v5; // ecx@2
  char *v6; // ecx@5
  char *v7; // ecx@12
  char *result; // eax@17
  int v9; // [sp+0h] [bp-228h]@4
  int v10; // [sp+4h] [bp-224h]@11
  int v11; // [sp+8h] [bp-220h]@2
  char *v12; // [sp+Ch] [bp-21Ch]@2
  void *Size; // [sp+10h] [bp-218h]@4
  int *v14; // [sp+14h] [bp-214h]@4
  void *v15; // [sp+18h] [bp-210h]@4
  int *v16; // [sp+1Ch] [bp-20Ch]@4
  void *Dst; // [sp+20h] [bp-208h]@7
  int *v18; // [sp+24h] [bp-204h]@7
  void *Src; // [sp+28h] [bp-200h]@11
  int v20; // [sp+30h] [bp-1F8h]@11
  int v21; // [sp+34h] [bp-1F4h]@11
  int v22; // [sp+38h] [bp-1F0h]@11
  int v23; // [sp+40h] [bp-1E8h]@11
  int v24; // [sp+44h] [bp-1E4h]@11
  int v25; // [sp+48h] [bp-1E0h]@11
  int v26; // [sp+50h] [bp-1D8h]@11
  int v27; // [sp+54h] [bp-1D4h]@11
  int v28; // [sp+58h] [bp-1D0h]@11
  int v29; // [sp+60h] [bp-1C8h]@11
  int v30; // [sp+64h] [bp-1C4h]@11
  int v31; // [sp+68h] [bp-1C0h]@11
  int v32; // [sp+70h] [bp-1B8h]@11
  int v33; // [sp+74h] [bp-1B4h]@11
  int v34; // [sp+78h] [bp-1B0h]@11
  int v35; // [sp+80h] [bp-1A8h]@11
  int v36; // [sp+84h] [bp-1A4h]@11
  int v37; // [sp+88h] [bp-1A0h]@11
  char v38; // [sp+90h] [bp-198h]@1
  char v39; // [sp+9Ch] [bp-18Ch]@1
  char v40; // [sp+9Eh] [bp-18Ah]@1
  char v41; // [sp+A0h] [bp-188h]@1
  char v42; // [sp+A2h] [bp-186h]@1
  char v43; // [sp+A4h] [bp-184h]@1
  char v44; // [sp+A6h] [bp-182h]@1
  char v45; // [sp+A8h] [bp-180h]@1
  char v46; // [sp+C0h] [bp-168h]@1
  int v47; // [sp+C8h] [bp-160h]@1
  int v48; // [sp+CCh] [bp-15Ch]@1
  char *v49; // [sp+D0h] [bp-158h]@1
  char v50; // [sp+D4h] [bp-154h]@17
  char v51; // [sp+114h] [bp-114h]@1
  int v52; // [sp+118h] [bp-110h]@1
  int v53; // [sp+11Ch] [bp-10Ch]@1
  char *v54; // [sp+120h] [bp-108h]@1
  char v55; // [sp+124h] [bp-104h]@14
  char v56; // [sp+224h] [bp-4h]@1

  sub_949190(&v38);
  v47 = 0;
  v48 = 0;
  v49 = 0;
  v51 = 1;
  sub_580A40(63);
  sub_943930("{0:d4}-{1:d2}-{2:d2} {3:d2}:{4:d2}:{5:d2}.{6:d3}{7}", &v39, &v40, &v41, &v42, &v43, &v44, &v45, &v46);
  v52 = 0;
  v53 = 0;
  v54 = 0;
  v56 = 1;
  sub_876CA0(255);
  if ( a3 >= 6 )
  {
    v9 = sub_924200(a3);
    v6 = (char *)&unk_C91586;
    v11 = *(_DWORD *)a4;
    if ( v49 )
      v6 = v49;
    Size = &a5;
    v14 = (int *)&a2;
    v15 = &a1;
    v16 = &v9;
    Dst = &v11;
    v18 = (int *)&v12;
    v12 = v6;
    sub_9D5E50(v6, &Size);
  }
  else
  {
    v12 = (char *)sub_924200(a3);
    v5 = (int)&unk_C91586;
    v11 = *(_DWORD *)a4;
    if ( v49 )
      v5 = (int)v49;
    Size = &a5;
    v14 = (int *)&v12;
    v15 = &v11;
    v16 = &v9;
    v9 = v5;
    sub_9D5DB0(v5, &Size);
  }
  if ( !(dword_D8F2F0 & 1) )
  {
    dword_D8F2F0 |= 1u;
    sub_8391C0(&unk_D8F2F8);
    sub_B46485(sub_B47E20);
  }
  if ( !(unsigned __int8)sub_93E7D0(&unk_D8F2F8) )
  {
    Size = 0;
    v14 = 0;
    v15 = 0;
    Dst = 0;
    v18 = 0;
    Src = 0;
    sub_66B370(&v9, &Size);
    sub_92CF40(v10, 16, 1);
    v20 = 0;
    v21 = 0;
    v22 = 0;
    sub_787170(v15, Size);
    v23 = 0;
    v24 = 0;
    v25 = 0;
    sub_7020C0(Src, Dst);
    sub_8599F0((int)&v26, (int)&v20, "Trove");
    sub_7863B0(v25, 2 * v24);
    v25 = 0;
    v24 = 0;
    v23 = 0;
    sub_7863B0(v22, v21);
    sub_944FE0(&v9, &v26);
    sub_92CF40(v10, 16, 1);
    sub_8599F0((int)&v32, (int)&v26, "DevTool.log");
    sub_5CCD50((int)&v9, (int)&v32, 3, 0, 3);
    sub_92CF40(v10, 16, 1);
    sub_7863B0(v37, 2 * v36);
    v37 = 0;
    v36 = 0;
    v35 = 0;
    sub_7863B0(v34, v33);
    v34 = 0;
    v33 = 0;
    v32 = 0;
    sub_7863B0(v31, 2 * v30);
    v31 = 0;
    v30 = 0;
    v29 = 0;
    sub_7863B0(v28, v27);
    v28 = 0;
    v27 = 0;
    v26 = 0;
    sub_7863B0(Src, 2 * (_DWORD)v18);
    Src = 0;
    v18 = 0;
    Dst = 0;
    sub_7863B0(v15, v14);
  }
  sub_93E750(2, 0i64);
  v7 = (char *)&unk_C915EC;
  if ( v54 )
    v7 = v54;
  sub_93F8B0(v7, &unk_D8F2FC, v52);
  if ( v54 == &v55 )
    v56 = 1;
  else
    sub_7863B0(v54, v53);
  result = v49;
  v54 = 0;
  v53 = 0;
  v52 = 0;
  if ( v49 != &v50 )
    result = (char *)sub_7863B0(v49, v48);
  return result;
}
