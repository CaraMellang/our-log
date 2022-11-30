import { Editor } from '@toast-ui/react-editor';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HookCallback } from '@toast-ui/editor/types/editor';

interface ImgPathType {
  seq?: number;
  path?: string;
  alt?: string;
}

interface Props {
  ref: React.RefObject<Editor>;
  callbackReplaceSrc?: () => void;
}

/**
 * Tui...당신이 이렇게 만들었어..
 * 변수명 개대충짯습니다. 리팩이 필요합니다.
 * Tui가 거지같이 만들어서 제어가 불가능합니다
 * 불가피하게 비제어로 만듭니다.
 *  @Param { ref } - TuiEditor useRef
 * @returns {ref , callbackReplaceSrc}
 * */
export function useTuiEditor({ ref }: Props) {
  const [previewEl, setPreviewEl] = useState<Element | string>();
  const [imgPath, setImgPath] = useState<ImgPathType[]>();
  const imgPathRef = useRef<ImgPathType[]>();
  const [forceRerender, setForceRerender] = useState(false);
  const previweElRef = useRef<Element | string>();

  //입력하다가 이미지 태그 삭제하면 돌아가는 놈
  const onChangeImgDelete = () => {
    const previewEl = ref.current?.getInstance().getEditorElements().mdPreview;
    const convertArr = Array.from(previewEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);

    const ArrFilter = convertArr.filter((r) => !imgPathRef.current?.includes({ alt: r.alt }));
    const ArrSrcFilter = convertArr.filter((r) => {
      if (!r.src) return false;
      return true;
    });
    console.log('자 내가 지워볼게 ', convertArr, ArrFilter, imgPathRef.current);
    if (!imgPathRef.current) {
      imgPathRef.current = [...ArrSrcFilter.map((r) => ({ src: r.src, alt: r.alt }))];
      return;
    }
    imgPathRef.current = [...imgPathRef.current, ...ArrSrcFilter.map((r) => ({ src: r.src, alt: r.alt }))];

    // convertArr.forEach((r) => {
    //   console.log('지울건데');
    //   imgPath?.forEach((imgPath, idx) => {
    //     console.log('제발 지워줘', imgPath, previewEl?.querySelectorAll('img'));
    //     if (imgPath.alt === previewEl?.querySelectorAll('img')[idx]?.alt) {
    //       previewEl?.querySelectorAll('img')[idx].setAttribute('src', String(imgPath.path));
    //     }
    //   });
    // });
  };

  //글입력 할 경우 호출되는 엘리먼트.
  const onChangeEditorElement = () => {
    const previewEl = ref.current?.getInstance().getEditorElements().mdPreview;
    const convertArr = Array.from(previewEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);

    //먼저 있는놈 돌려요

    // convertArr.forEach((r) => {
    //   const getCorrectImgPath = imgPath.filter((img) => img.alt === r.alt)[0];
    //   console.log('하하', getCorrectImgPath, r, imgPath);
    //   console.log('제발점');
    //   r.setAttribute('src', String(getCorrectImgPath?.path));
    // });
    console.dir(previewEl);
    if (imgPathRef.current && imgPathRef.current?.length !== 0) {
      console.log('ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ너임?', imgPathRef);
      convertArr.forEach((r) => {
        imgPath?.forEach((imgPath, idx) => {
          if (imgPath.alt === previewEl?.querySelectorAll('img')[idx]?.alt) {
            previewEl?.querySelectorAll('img')[idx].setAttribute('src', String(imgPath.path));
            previewEl?.querySelectorAll('img')[idx].setAttribute('id', String(imgPath.seq));
          }
        });
      });
    }
    onChangeImgDelete();

    const resultPrevire = previewEl;

    // const ArrFiter = convertArr.filter((r) => imgPath?.includes({ alt: r.alt }));
    // ArrFiter.forEach((r) => {
    //   const getCorrectImgPath = imgPath?.filter((img) => img.alt === r.alt)[0];
    //   r.setAttribute('src', String(getCorrectImgPath?.path));
    // });

    // const ArrFiter = convertArr.filter((r) => imgPath?.includes({ alt: r.alt }));
    // ArrFiter.forEach((r, idx) => {
    //   previewEl?.querySelectorAll('img')[idx].setAttribute('path', imgPath?.[idx].path as string);
    // });

    setPreviewEl(resultPrevire);
    previweElRef.current = resultPrevire;
    setForceRerender((prev) => !prev);
  };

  //이미지 추가
  //src='undefined 되는 부분이 있음 해결해야함. 얘 때문에 다망가짐.'
  const handleAddImageBlobHook = useCallback(
    async (blob: Blob | File, cb: HookCallback) => {
      const blobFile: any = blob;
      const localImageUrl = URL.createObjectURL(blobFile);

      console.log('나좀 봐줘', imgPathRef.current);
      const imgSeq = Math.round(Math.random() * 1000000);
      const imgAltName = blobFile.name + imgSeq;
      cb(localImageUrl, imgAltName);

      const previewEl = ref.current?.getInstance().getEditorElements().mdPreview;
      const convertArr = Array.from(previewEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);

      if (!imgPathRef.current) {
        const imgSeq = Math.round(Math.random() * 1000000);
        previewEl?.querySelectorAll('img')[0].setAttribute('src', localImageUrl);
        previewEl?.querySelectorAll('img')[0].setAttribute('id', String(imgSeq));
        console.log(
          '네놈인것이냐 ?? 아닌데요 얘 if 먹히지도 않고 src="undefined"가 추가되는데요?ㅋㅋ 어디서 추가함? 설마 onChage인가? 확인결과 delete를 비활성화 하면 잘 나옴. 수정필요' +
            '현재 잘 되긴 하는데 하나라도 사진 추가하는 순간 배열이 복사가 됨. delte의 48번째 줄 저깃 ㅓ문제임. 텍스트 입력이면 저거 넣지않게? 바꿔야할듯.',
          imgPathRef.current,
        );
        setImgPath([{ seq: imgSeq, path: localImageUrl, alt: imgAltName }]);
        imgPathRef.current = [{ seq: imgSeq, path: localImageUrl, alt: imgAltName }];
        return;
      }

      //여기서 2개 이상img 가 있을경우 ref 값 변경
      const prevImgPathRef = imgPathRef.current;
      imgPathRef.current = [...prevImgPathRef, { seq: imgSeq, path: localImageUrl, alt: imgAltName }];

      console.log('비뀐거좀 확인할게', imgPathRef.current);

      //이놈 있냐?
      console.log(' 좀', convertArr);
      convertArr.forEach((r) => {
        console.log('새 좀zz', imgPathRef.current);
        imgPathRef.current?.forEach((list, idx) => {
          console.log(' 좀zzz', imgPathRef.current, '알알알', r);
          if (list.alt === previewEl?.querySelectorAll('img')[idx]?.alt) {
            const imgSeq = Math.round(Math.random() * 1000000);
            console.log(' 좀zzzzsszz', imgPathRef.current);
            previewEl?.querySelectorAll('img')[idx].setAttribute('id', String(imgSeq));
            previewEl?.querySelectorAll('img')[idx].setAttribute('src', String(list.path));
          }
        });
        // imgPath?.forEach((list, idx) => {
        //   console.log(' 좀zzz');
        //   if (list.alt === previewEl?.querySelectorAll('img')[idx].alt) {
        //     previewEl?.querySelectorAll('img')[idx].setAttribute('src', String(list.path));
        //   }
        // });
      });

      setImgPath((prev) => {
        if (!prev) return [{ seq: imgSeq, path: localImageUrl, alt: imgAltName }];
        return [...prev, { seq: imgSeq, path: localImageUrl, alt: imgAltName }];
      });
    },
    [imgPath],
  );

  // const handleAddImageBlobHook = async (blob: Blob | File, cb: HookCallback) => {
  //   const blobFile: any = blob;
  //   const localImageUrl = URL.createObjectURL(blobFile);
  //
  //   const imgSeq = Math.round(Math.random() * 1000000);
  //   const imgAltName = blobFile.name + imgSeq;
  //   cb(localImageUrl, imgAltName);
  //
  //   const previewEl = ref.current?.getInstance().getEditorElements().mdPreview;
  //   const convertArr = Array.from(previewEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);
  //
  //   // //먼저 있는놈 돌려요
  //   // const ArrFiter = convertArr.filter((r) => imgPath?.includes({ alt: r.alt }));
  //   // ArrFiter.forEach((r) => {
  //   //   const getCorrectImgPath = imgPath?.filter((img) => img.alt === r.alt)[0];
  //   //   r.setAttribute('src', String(getCorrectImgPath?.path));
  //   // });
  //   //
  //   // //그리고 없는놈 추가
  //   // const ArrFiterSrcNotfound = convertArr.filter((r) => !imgPath?.includes({ alt: r.alt }));
  //   // ArrFiterSrcNotfound[0].setAttribute('src', localImageUrl);
  //
  //   if (!imgPath) {
  //     console.log('없다는데', imgPath);
  //     previewEl?.querySelectorAll('img')[0].setAttribute('src', localImageUrl);
  //     setImgPath([{ seq: imgSeq, path: localImageUrl, alt: imgAltName }]);
  //     return;
  //   }
  //
  //   //이놈 있냐?
  //   console.log('새키야 좀');
  //   convertArr.forEach((r) => {
  //     console.log('새키야 좀zz');
  //     imgPath?.forEach((list, idx) => {
  //       console.log('새키야 좀zzz');
  //       if (list.alt === previewEl?.querySelectorAll('img')[idx].alt) {
  //         previewEl?.querySelectorAll('img')[idx].setAttribute('src', String(list.path));
  //       }
  //     });
  //   });
  //
  //   setImgPath((prev) => {
  //     if (!prev) return [{ seq: imgSeq, path: localImageUrl, alt: imgAltName }];
  //     return [...prev, { seq: imgSeq, path: localImageUrl, alt: imgAltName }];
  //   });
  // };

  if (ref.current) {
    const previewEssl = ref.current?.getInstance().getEditorElements().mdPreview;
    const convertArr = Array.from(previewEssl?.querySelectorAll('img') as NodeListOf<HTMLImageElement>);
    console.log(convertArr, 'zzzz');
  }
  console.log(imgPath, '상태왜이럼');

  return [previewEl, handleAddImageBlobHook, onChangeEditorElement];
}
